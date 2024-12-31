---
layout: post
title: Vendee Globe
permalink: vendee-globe
tags:
---

Every 4 years the [Vendee Globe](https://en.wikipedia.org/wiki/Vendee_Globe) is a sailing race where skippers go alone around the world, starting from France, going South in the Atlantic then sailing East through the Indian Ocean, then the Pacific, and finally back up the Atlantic Ocean. I have vague memories of following the race in school when I was a kid.

Now with Internet connectivity almost everywhere, skippers are sending [daily videos on YouTube](https://www.youtube.com/playlist?list=PL4D2712YsGHIV9kjfOTblYd5_S7EzqBpP). I hate YouTube interface because it is hard to find where you left off and so much noise to make you watch more "related" videos, and it is missing so much context around the race itself.

My "I can build something better for this" spirit kicked in. If you want to skip the detail and see the website right away, head over to [onboard-videos.com](https://onboard-videos.com).

It includes building 2 features:

1. fetch and store the videos from YouTube (YouTube only returns the last 10 videos as part of the RSS feed)
2. show the videos with keeping track of watching history (locally)

My go-to for CRON job is [Cloudflare Worker with a `scheduled` handler](https://developers.cloudflare.com/workers/runtime-apis/handlers/scheduled/). And to follow [my side project rules](/rules-for-side-projects), the scope is small so I can go wild with the tech stack...

### A bumpy "pick the stack" journey

For similar use case, I would have 2 applications: a Cloudflare Worker with a `scheduled` handler and another web server. But it would be nice to have everything under the same umbrella.

[hono.dev](https://hono.dev/) offers an entry point to handle both `fetch` (for HTTP requests) and `scheduled`. The only client side JavaScript I needed was to store your watching history in `localStorage`. Everything was fine until I started adding more client side JavaScript to interact with the YouTube SDK and to auto play the next video. It worked but I didn't have much confidence into the code, and it wasn't getting fun to code. It worked and it was spaghetti code, in short I missed React. I realized it forced a structured code.

[astro.build](https://astro.build/) doesn't offer a way to set the `scheduled` handler. I dug into the build system, and the adapter. I made it work (probably in a hacky way), it looked like this:

```javascript
// main.mjs
import { pageMap, default as defaults } from "./dist/_worker.js/index.js";
import scheduled from "./src/scheduled.ts";

// this is what the built main file does.
export { pageMap };

export default {
  // ./dist/_worker.js/index.js is the build output from astro
  fetch: defaults.fetch,
  scheduled,
};
```

```toml
# wrangler.toml
name = "onboard-videos-astro"
compatibility_date = "2024-11-12"
compatibility_flags = ["nodejs_compat_v2"]
main = "./main.mjs"
assets = { directory = "./dist", binding = "ASSETS" }

```

that sorted, I could have the list of videos static and YouTube player be a React component. It got complicated because video player have [limitations on iOS](https://webkit.org/blog/6784/new-video-policies-for-ios/), and I needed to mark videos as watched from the player to the list. Yet again, I under estimated the amount of client side JavaScript I needed :(

Thankfully I could apply the same pattern of [1 entry point](https://github.com/boertel/onboard-videos/blob/main/server.ts) to [remix.run](https://remix.run), and Remix offers a nice way to deal with augmenting server-side data with client-side data.

1. `loader` fetch the list of videos from database
2. `clientLoader` augments the list with `localStorage` data
3. the component get server-side + client-side data combined.

Here how the Remix code looks like without noise:

```javascript
export function loader() {
  return json(
    { videos: [ ... ] // get data from database },
    {
      headers: {
        "Cache-Control": "max-age=600, s-maxage=1800"
      }
    }
  );
}

export function clientLoader({ serverLoader }) {
  const serverData = await serverLoader()

  const videos = serverData.videos.map((video) => {
    // get data from localStorage
  })

  return {
    ...serverData,
    videos,
  }
}

export function shouldRevalidate({ nextUrl }) {
  if (nextUrl.searchParams.get("v")) {
    // we don't need to run both loaders when we are watching a video,
    return false;
  } else {
    // only when going back to the list of videos
    return true;
  }
}

// we need hydration to run loader then clientLoader on initial request
// otherwise default behavior is:
// loader -> render on first request, then both on subsequent requests
// to get isWatched/progress data
clientLoader.hydrate = true;

export function HydrateFallback() {
  return null;
}
```

Using a route navigation between watching a video and the list of videos, I could rely on `shouldRevalidate` and `clientLoader` to get the latest watched videos.
With some caching on top of that, I don't have to re-run `loader`.

You can see the whole code [on GitHub](https://github.com/boertel/onboard-videos/blob/main/app/routes/index.tsx#L34-L211).

After trying 3 stacks, I o wish I had the energy to pick something else than Remix (most my side projects use it). Sveltekit would have be my next choice since they have similar way to [fetch server/client data](https://svelte.dev/docs/kit/load#Universal-vs-server). Maybe in 4 years for the next edition?

### And add context

Once I got the main features to watch videos, and keep track of your history. I could focus on adding context which YouTube UI wouldn't have. Rankings are published as ... a spreadsheet, not a CSV, a proper Microsoft Excel file. It turns out I was going to work on 2 projects: one needed to parse spreadsheet, and the other one to display a map chart. Proof that it is always worth exploring technologies and libraries on side projects.

This piece of the website has more a UI/UX exercise than a code exercise, and it allowed me to play with animations and layout for desktop to mobile.

<video controls style="width: 100%; margin: 10px 0">
    <source src="/media/vendee-globe/rankings.mov" type="video/mp4">
</video>

and show route and position while watching the video:
![route, position, and video](/media/vendee-globe/video.png)

Go check out the experience for yourself: [onboard-videos.com](https://onboard-videos.com) and see you in 4 years for the next edition!
