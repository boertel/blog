---
layout: post
title: Reading Notes, November 2023
permalink: reading-notes-2023-november
description: Reading notes for November 2023
tags:
---

### Article: "[AI and the Rise of Mediocrity](https://time.com/6337835/ai-mediocrity-essay/)"

> AI thrives when our need for originality is low and our demand for mediocrity is high.

### Article: "[Examples of Great URL Design"](https://blog.jim-nielsen.com/2023/examples-of-great-urls/) by Jim Nielsen

UX for developers. Little details:

- marketing: [slack.com/is/everything-in-one-place](https://slack.com/is/everything-in-one-place)
- context: [stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript/](https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript/)
- functionality: [github.com/django/django/compare/4.2.7...main](https://github.com/django/django/compare/4.2.7...main)

### Article: "[Stop Saying Best Practice](https://www.wking.dev/library/stop-saying-best-practice)"

"Best partices" usually go into these buckets:

- Community Pattern: _What makes this a “best practice” is because when everyone sees it they know exactly how and why it is there._
- Readability Pattern: example is between using `reduce` (commonly known to be un-readable) vs. `for .. of ...` loops.
- Performance Pattern: _doesn't always give you the courtesy of being the easy way to write it. [...] Never shy away from heavy documentation on these patterns_
- Guardrail Pattern: _So enter the guardrail pattern of assigning all of our numbers, even one off ones, to a variable._

### Article: "[Goodbye, Clean Code](https://overreacted.io/goodbye-clean-code/)" by Dan Abramov

Walk through of a classic abstraction refactor. One co-worker's code looks like it can abstracted with more functions:

- DO NOT refactor it, especially without asking the other person why the code is as is.
- Code won't be extendable. Requirements might change in the future, your abstraction won't cover them, you'll have to update your function with edge-cases, it'll get ugly!

### Article: "[Everything about SEO is obnoxious](https://chriscoyier.net/2023/11/08/everything-about-seo-is-obnoxious/)" by Chris Coyier

It feels like it is a trend (or only on the blog I'm following), but people seems annoyed at the current state of the web.

> It’s gotten bad enough that the trust has eroded. We collectively have a feeling anything you Google for doesn’t deliver you the best results, it delivers you a pile of whoever is winning the SEO deathmatch at the moment.

One example I witness was to look up the some articles about what is a "senior software engineer", and the results on the search were linked in, jobs and random blogs from interview/hiring companies (which I don't trust, their contentis to get better SEO).

### Article: "[10 hard-to-swallow truths they won't tell you about software engineer job](https://www.mensurdurakovic.com/hard-to-swallow-truths-they-wont-tell-you-about-software-engineer-job/)"

> - You will rarely get greenfield projects
> - Nobody gives a f\*\*\* about your clean code
> - Get used to being in meetings for hours
> - They will ask you for estimates a lot of times
> - It will be almost impossible to disconnect from your job
> - You will profit more from good soft skills than from good technical skills

### Article: "[6 tiny wording tweaks to level up your communication as a software engineer](https://careercutler.substack.com/p/6-tiny-wording-tweaks-to-level-up)"

> - “Would you be open to…” instead of Can you…”
> - Adding “because” to any request
> - “Can we…” instead of “Can you…”
> - “What do you think?” at the end of your suggestion
> - “It seems like” for stalemates in conversation.
> - Changing the order of “but”

### Video: "[Simplifying Server Components](https://portal.gitnation.org/contents/simplifying-server-components)" by Mark Dalgleish

RSC are hard to understand. Mark walks us through the details of it in a good abstract way.
