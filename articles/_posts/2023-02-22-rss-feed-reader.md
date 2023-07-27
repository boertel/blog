---
layout: post
title: "Alternette: my home-cooked RSS reader"
permalink: rss-reader
tags: rss homecooked
---

## 2018: Croissant

Let's go back to [2018](https://github.com/boertel/croissant-django/commit/aaf980ed398496f79829fd7a55d6f9184aea9c24), when I moved from twitter to [feedly](https://www.feedly.com) to find articles. The main reason was to keep following _real people_ on twitter and follow news organzations on feedly.

At the time, feedly (and other RSS readers) I found had flaws:

1. _Duplicate articles_. For example, if The Verge would post about some new technology, it would likely be posted on Hacker News and others.
2. _Same topics_. News organizations post about same topic: Earhtquake in Turkey, EV tax credits, etc.
3. _No visibility on my consumption_. They are tracking me (for good and bad reasons) but I don't have access to that data, either in a nice UI or even the raw data.

It started by creating a fake UI on [codepen](https://codepen.io/boertel/full/PeroOq). Then my 2018 tech stack was: [Django](https://www.djangoproject.com/) for backend and [CRA](https://create-react-app.dev/) for frontend. It is probably my cleanest backend side project to date. No one looked a the code but after iterating on it for 4 years, the code was never a mess that I didn't understand. Here are the highlights that came out of it:

1. serve my template from a S3 bucket: [boertel/django-s3-template-loader](https://github.com/boertel/django-s3-template-loader)
2. decorate models to be searchable with [meilisearch](https://www.meilisearch.com/): [boertel/django-meilisearch](https://github.com/boertel/django-meilisearch)
3. layer on top of [celery](https://docs.celeryq.dev/en/stable/) and [redbeat](https://github.com/sibson/redbeat/) to [attach tasks to models](https://github.com/boertel/croissant-django/blob/main/backend/feed/models.py#L63-L79). Over engineered? maybe but isn't it what side projects are about?
4. rely on a private python package to handle RSS and opengraph parsing

At the time I named it _Croissant_ as I would picture myself going through articles eating a croissant in the morning. This is how it looked:

<video controls>
    <source src="/media/rss-reader/croissant.mov" type="video/mp4">
</video>
<br />

Along the years the frontend code didn't age well. It uses redux, [HOCs](https://reactjs.org/docs/higher-order-components.html) and stylus. The maintenability between frontend and backend is shocking. Python/Django is easy to go in and out, whereas React is almost impossible for me to change anything at that point without crying. Globally Frontend got better, if the code was 8 years old I would have had to deal with Angular or jQuery or even Vanilla JavaScript. But React patterns changed from Classes/Mixins to HOC and functional components to hooks.

And frustrations kept growing:

- random bugs that I didn't bother fixing because they didn't appear _that_ often,
- navigation was broken, if I refreshed the page, it would navigate to the latest articles.
- I tracked some data but I would have to connect to Postgres to check out what articles I read.
- I had to run celery on my machine,
- I never actually got to a point where I could detect similar topics/articles,

I would never allow myself to do a full rewrite of a work related project but as this is personal, it was time for a change!

## 2023: Introducing Alternette

My 2023 tech stack is now: [remix](https://remix.run/) with [prisma](https://www.prisma.io/). I have a [remix template](https://github.com/boertel/remix-template) to get started quickly since I'm using it _that_ much. Here how it looks:
<video controls>

<source src="/media/rss-reader/alternette.mov" type="video/mp4">
</video>
<br />

It allowed me to play with new technologies such as:

#### WebAuthn

[WebAuthn](https://webauthn.guide/), the future of authentication by the death of passwords! It is what I wished password managers such as 1password were doing:

1. land on a login page
2. click "login"
3. ask for my fingerprint
4. I'm logged in.

Except your logins are tied to your browser. So if I'm logged in on Chrome, I won't be able to connect with Firefox. There are mechanisms to go through a QR code from your phone if the logins are on your phone. Safari was the best flow and it is probably well integrated with iOS but similar to Apple Pay, you can only access it through Safari...

#### Cloudflare Workers

The steps to fetch the latest articles from RSS feeds are:

1. fetch RSS feed
2. fetch extra data from web pages for necessary feeds (some feeds provide everything, some are not).
3. search for similar articles

it is stateless and relies on the main database to fetch what is needed to sync, this method allows to be more resilient:

1. if _the worker crashes_, the database won't mark feed as "synced" and the worker will restart where it left off before crashing.
2. if _the database crashes_, then the worker won't be able to know what to sync. The worker will restart syncing once the database is back up.

My approach with Django was to mimic a "real life" scenario:

> I need to sync feed X every 15 minutes, and feed Y every hour.

I needed one task X to run 15 minutes, and one task Y to run every hour. No waste of resources. Whereas now, I'm running a task every 10 minutes that queries: _get me the feed that needs to be sync now_, it looks something like: `SELECT * FROM feed WHERE next_sync_at < NOW();` I'm freshing feeds from every 15 minutes to once a day, so it is possible that a task can run without having any feeds to sync. But I believe the simplicity of this mechanism is worth the waste of resources (more feeds will mean less chance of wasted resources).

#### OpenAI with Pinecone

I've been trying on and off to identify articles talking about the same topic (it is slightly different than same articles). Before this year, I found open source AI projects to run heavy process and rarely they were explaining how to run something with _your_ data. As 2023 is probably OpenAI/ChatGPT year even if we are only in February, it was time to give it a try. One reason a lot of projects are running with OpenAI is, in my opinion, because their REST API is simple and accessible to developers. Here are the 3 steps of my "similiarity" feature:

1. fetch "embeddings" from [OpenAI](https://platform.openai.com/docs/api-reference/images)
2. add these embeddings to [Pinecone](https://www.pinecone.io/)
3. [query Pinecone](https://docs.pinecone.io/docs/query-data) to fetch similar articles

I want to know more about embeddings but so far what I know is that they are a list of floats that represents your content. I'm assuming that 2 articles talking about the same topic will have embeddings that are "close" enough, whatever "close" means in this case. That is Pinecone job to do that. Next step is to explore how to abstract myself from OpenAI and Pinecone to handle everything. The pieces might be in these articles:

- [Storing OpenAI embeddings in Postgres with pgvector](https://supabase.com/blog/openai-embeddings-postgres-vector) from Supabase
- [Calculating embeddings with gtr-t5-large in Python](https://til.simonwillison.net/python/gtr-t5-large) from Simon Willison

#### Scale

My side-projects have rarely a lot of data but here we are getting to an interesting size: 240,000 entries, and it shows when some queries are being made. I'm trying to optimize queries or restructure the way the data is stored before throwing some kind of cache in front of them.

If you got this far, you can try it for yourself: [alternette.vercel.app](https://alternette.vercel.app).

Disclaimer, the UI isn't intuitive to add feed to your buckets, I'm the lone customer so I rather spent my time of friction that I encounter daily.
