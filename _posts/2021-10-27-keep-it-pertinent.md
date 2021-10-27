---
layout: post
title: Keep it pertinent
permalink: keep-it-pertinent
tags:
---

After 10 years on Twitter, I'm following more accounts on Twitter than I can keep up with. And it isn't that much, 347 as time of writing (which was a bit more before starting working on "Kip").
With 347 accounts to follow, and the new Twitter timeline that shows "liked" tweets from these accounts, that means my timeline is barely relevant anymore 😐

Time for a cleaning, and here are the rules I would follow to decide if an account is worth keeping or not:

1. Are the tweets still relevant to when I started following this account? (👀 looking at you, people who started tweeting about NFTs)
2. I followed some accounts more as a bookmark to check their progress than to actually keep up forever with their tweets. Probably should belong on a list more than on the main timeline.
3. This one is just a number's game. I follow accounts than haven't tweeted for years. Are they still worth following?

I could have simply go manually on twitter and un-follow them, but why not create a better interface to deal with this?

### A Quick Look

My main goal was to have _keyboard navigation_: I should be able to go through the list of following accounts without touching my mouse.

<video src="/media/keep-it-pertinent/kip.mp4" controls width="100%"></video>

### New Technologies

I took the opportunity to experiment with a few technologies:

1. Database is hosted on [planetscale.com](https://planetscale.com/) to leverage branches for databases
2. Redis to cache Twitter responses on [upstash.io](https://upstash.com/)
3. Go a bit deeper with TypeScript

### Future Ideas

1. monitor new following accounts, to be able to pin the tweet tweets that made you follow them,
2. add notes: _I'm following X because of Y_
3. manage Twitter API rate limits

### Test it out

Go try it out and clean up your following list: [https://keep-it-pertinent.oertel.fr](https://keep-it-pertinent.oertel.fr)
