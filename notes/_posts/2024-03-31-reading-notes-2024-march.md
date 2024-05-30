---
layout: post
title: Reading Notes, March 2024
permalink: reading-notes-2024-march
tags:
---

I'm way being on these notes. On the last note, I talked about tracking notes not per month but as they come so I ended building a tool for it: [souvenirs-on.pages.dev](https://souvenirs-on.pages.dev/), which requires its own post.

### Art: [Pen Plotting](https://adamfuhrer.com/pen-plotting) by Adam Fuhrer

Pen plotting looks like a way to combine art and [code](https://p5js.org/get-started/).

> The act of turning digital art into something tangible has felt really rewarding.

![pen plotting](https://adamfuhrer.com/assets/images/small-pen-plots/5.jpeg)

Check out [Adam's store](https://adamfuhrer.bigcartel.com/) for more of his work.

### Article: [On quality software](https://thejollyteapot.com/2024/03/9/on-quality-software)

> Another analogy. Great software is like a volume knob on an old hi-fi music system that feels well-tempered, well-oiled, with a satisfying touch, providing precision, reliability, and control. These knobs were a real sensation to touch and operate. Did they work better than standard knobs? Not really. Did they make the music sound better than crappy volume knobs? Not at all.

### Article: [The Copenhagen Book](https://thecopenhagenbook.com/) by Pilcrow

By the creator of [lucia auth](https://lucia-auth.com/). It explains authentication concepts (for the web) such as cookies, sessions, tokens, and more.

### Article: [Is Making Websites Hard, Or Do We Make It Hard? Or Is It Some of Both?](https://blog.jim-nielsen.com/2024/hard-websites/) by Jim Nielsen

> organizational discipline on behalf of a business to say, “It’s ok if our implementation is ‘basic’ but functional.”

> You think people will judge you if your website doesn’t look and feel like a “modern” website. [...] But you know what they’ll judge you even more for? If it doesn’t even work.

### Article: [Simplify Dark Mode w/ Radix Colors & Tailwind](https://blog.soards.me/posts/radix-colors-with-tailwind/)

Tailwind doesn't generate dark mode from the colors you've used. This article explains how to use [Radix Colors](https://radix-ui.com/colors) to generate light and dark mode colors.

### Article: [My Reusable GitHub Actions Workflows](https://stefanzweifel.dev/posts/2024/03/03/my-reusable-github-actions-workflows) by Stefan Zweifel

You can reference a workflow from another repository in your own repository.

```yml
jobs:
  pint:
    uses: stefanzweifel/reusable-workflows/.github/workflows/laravel-pint-fixer.yml@main
```

### Article: [There is no cookie banner law](https://www.amazingcto.com/cookie-banners-are-not-needed/)

> The EU does not mandate cookie banners. Companies do.

### Article: [Language and Time Perception](https://www.popsci.com/language-time-perception/)

> Swedish and English speakers, for example, tend to think of time in terms of distance—what a long day, we say.

> Spanish and Greek speakers, on the other hand, tend to think of time in terms of volume—what a full day, they exclaim.

The experiment involves a moving line (distance), and a cup filling up (volume).
