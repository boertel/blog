---
layout: post
title: Reading Notes, January 2024
permalink: reading-notes-2024-january
description: Reading notes for January 2024
tags:
---

### Article: "[Do it for them.](https://shayy.org/posts/do-it-for-them/)"

> Think about the Chat with AI ✨ feature that half of you shipped last year. How is it doing for your users? Are they using it? Or is it collecting dust in the sea of features you’ve shipped? What if you could’ve done it for them instead? What if you could’ve shipped **a solution that automatically did the work for them** and delivered the insights they needed?
>
> See the difference? One is a tool, the other is a solution. One requires the user to learn and use, the other does it for them. That’s the difference that gives you the edge in a saturated market of tools and features.

and yet, I'm building a product where people would have to write reports. I don't want to have AI generated report (for no particular reason) but I want AI to help guide people how to write the report, point out what is missing, maybe help with the tone of voice. It is the opposite of "do it for them" but it does feel better to me. To be continued.

### Article: "[52 things I learned in 2023](https://kenthendricks.com/52-things-i-learned-in-2023/)" by Kent Hendricks

I like the concept, and it is tied up to my concept/resolution of consuming less, consuming better (in terms of online content). Here are the few items that pick my interests:

> One reason the United States didn’t adopt the metric system was because the ship crossing the Atlantic from France carrying a standard kilogram—yes, a real physical object—requested by Thomas Jefferson in 1793 was blown off course into the Caribbean and captured by pirates. ([“How Pirates Of The Caribbean Hijacked America’s Metric System”](https://www.npr.org/sections/thetwo-way/2017/12/28/574044232/how-pirates-of-the-caribbean-hijacked-americas-metric-system))
>
> Pheasant Island, a 200-meter long island in the middle of the Bidasoa River between France and Spain, swaps sovereignty every six months. Spain holds the island between February 1 and July 31 each year, and France gets it from August 1 through June 30. It’s been this way since the end of the Thirty Years’ War. ([“Europe’s island that swaps nationalities”](https://www.bbc.com/travel/article/20220706-europes-island-that-swaps-nationalities))
>
> The concept of moral decline—people today are less moral than years past and future generations will be less moral than the present one—is a belief that became widespread in 1949 and is now dominant in nearly every country. ([“Illusion of moral decline”](https://www.psypost.org/2023/06/psychologists-have-identified-a-pervasive-illusion-that-has-existed-for-at-least-70-years-166017))
>
> Houses in Amsterdam are narrow because of tax evasion. In the sixteenth century they were taxed by the width of a property’s canal frontage, rather than height or total size. Incentivized the construction of narrow, deep, and tall buildings, which, in turn, required steep, narrow staircases. This is why Dutch architecture contains “hoisting hooks” which can move goods to the upper floors without using stairs. ([99 Percent Invisible](https://99percentinvisible.org/article/vernacular-economics-building-codes-taxes-shape-regional-architecture/))

### Article: "[Why Arabic Is Terrific](https://idlewords.com/2011/08/why_arabic_is_terrific.htm)"

Show a few details of arabic languages, and it is fascinating. Like plurals, in English there are exceptions such as foot/feet. In Arabic it is the other way: _kitaab/kutub (book)_, and most plurals are like this

> letters change their shape depending on what their neighbors are

> What we call Arabic numerals aren't used in Arabic except in extraordinarily formal contexts. Instead, Arabic uses "Indian numerals"

> The first is that texts from over a thousand years ago remain accessible to modern readers. [...] The second is that spoken Arabic has diverged substantially from the written language, so you can study it formally for years and not be able to understand a television commercial.[...] This is where it really helps to love language study. Arabic has a large number of dialects, some of which are not mutually intelligible, but all educated Arabs will know the formal written language, which they consider to be a higher form of their day-to-day speech.[...] [It] gives rise to fascinating situations watching Arabs calibrate their lanugage based on the situation and the linguistic background of their interlocutor.

### Article: "[Let me repeat that back to you](https://roughlywritten.substack.com/p/let-me-repeat-that-back-to-you)" by Ryan O'Neill

> One of the most effective communications strategies I use is repeating back, in my own words, what was just explained to me.

I had a meeting with someone doing exactly that, and it was great. I must take example.


### Article: "[A Big Year For Small Models](https://www.dbreunig.com/2023/12/21/a-big-year-for-small-models.html)" by Drew Breunig

> What we want are LLMs focused on a specific set of tasks. These models are easier for users and product designers to understand. They’re dramatically smaller while maintaining excellent performance in their one niche. This smaller size allows them to run, self-contained at the edge or on a server, faster and cheaper than your giant generic models.


### Article: "[The duty to document](https://nicolasbouliane.com/blog/duty-to-document)" by Nicolas Bouliane

> If you learn something the hard way, share your findings with others. You have blazed a new trail; now you must mark it for your fellow travellers. Sharing knowledge is an unreasonably effective way of helping others.


### Article: "[The Tiny Stack (Astro, SQLite, Litestream)](https://logsnag.com/blog/the-tiny-stack)" by Shayan

I've been expirementing with [Astro](https://astro.build/) and have a nice feeling with it, it reminds me of [jekyll](https://jekyllrb.com/) which powers this website for 12 years.


### Article: "[Scheduled and Background Jobs with pg-boss in TypeScript: A Deep Dive](https://logsnag.com/blog/deep-dive-into-background-jobs-with-pg-boss-and-typescript)" by Shayan

These two last entries are good examples of "learn something the hard way, share your findings". And on top of things, it shows [pg-boss](https://github.com/timgit/pg-boss) which I never heard off but I'm a big fan of both postgres and queueing jobs.


### Article: "[Fine-tuning Won't Add New Knowledge To Your Model](https://dylancastillo.co/fine-tuning-vs-rag/)"
> Fine-tuning isn't meant to add new information to your model. It's meant to change how your model behaves. Typical use cases of fine-tuning include:
>
> - Ensuring the model responds in a specific way
> - Learning to generate complex outputs, like in tasks that currently require a chain of prompts.

vs. 

> [Retrieval-augmented Generation (RAG)] provides relevant information to the model in the prompt used in the request. Then, the model uses that data to respond to the user's query.
