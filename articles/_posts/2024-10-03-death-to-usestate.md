---
layout: post
title: Death to useState
permalink: death-to-usestate
tags: remix cloudflare
---

As often, a quick change become a bigger one. I migrated [number.oertel.fr](https://number.oertel.fr/) from vercel to [Cloudflare Worker](https://developers.cloudflare.com/workers/frameworks/framework-guides/remix/) because Cloudflare [announced a way](https://blog.cloudflare.com/builder-day-2024-announcements/#static-asset-hosting) to host remix (and other frameworks) on a worker versus hosting in through Cloudflare Pages.

This project is the perfect use case for a SPA since there is no server side logic. Remix doesn't support SPA just yet _but_ they did add [clientLoader/clientAction](https://remix.run/docs/en/main/guides/client-data) since I started.

The project requires to keep [track a few states](https://github.com/boertel/write-the-number/blob/eeb6bae7076ec39139cf792a92fc25cbe9629aa0/app/routes/index.tsx#L22-L57):

- current number to guess
- submission count because the flow requires you to press "Enter" twice: once to validate your guess, and then once more to go to the next number.
- status of the answer: correct or wrong
- localStorage data to show your history at the bottom of the page
- upper limit to the guessing domain
- language (french or spanish)
- method how to guess the number: read it and/or listen to it

### with useState

Without `clientLoader` there is logic a bit everywhere:

1. before the render, in `useEffect`, inline functions, etc.
2. in [event handlers](https://github.com/boertel/write-the-number/blob/eeb6bae7076ec39139cf792a92fc25cbe9629aa0/app/routes/index.tsx#L76-L102)
3. [when rendering the components](https://github.com/boertel/write-the-number/blob/eeb6bae7076ec39139cf792a92fc25cbe9629aa0/app/routes/index.tsx#L193-L251)
4. search parameters management on all [input changes](https://github.com/boertel/write-the-number/blob/eeb6bae7076ec39139cf792a92fc25cbe9629aa0/app/routes/index.tsx#L148-L149)

### Now with clientLoader

It allows to keep a nice separation of concerns between logic and presentation (I guess good old MVC but my model is kind of insignifiant).

Inside `clientLoader` I can now:

1. [check and parse query parameters](https://github.com/boertel/write-the-number/blob/7783037fc477781e793c2301ec1bb5ab477e9829/app/routes/_index.tsx#L25-L35)
2. fetch `localStorage` data
3. logic to [check the guess](https://github.com/boertel/write-the-number/blob/7783037fc477781e793c2301ec1bb5ab477e9829/app/routes/_index.tsx#L40-L45)

And in the render, I can rely on HTML inputs and form to track data. With `clientLoader` and `Form` (and the absence of server loader/action), there is no requests (POST or GET) done to the server.

I could have probably do a better job on the first version to rely less on `useState` but `clientLoader` gives the power of dealing of form submission without preventing the default behavior.

Checkout for yourself: [version with `useState`](https://github.com/boertel/write-the-number/blob/eeb6bae7076ec39139cf792a92fc25cbe9629aa0/app/routes/index.tsx) vs. [version with `clientLoader`](https://github.com/boertel/write-the-number/blob/7783037fc477781e793c2301ec1bb5ab477e9829/app/routes/_index.tsx)
