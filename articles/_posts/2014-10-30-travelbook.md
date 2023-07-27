---
layout: post
title: Process behind Travelbook
permalink: travelbook
tags: projects travelbook photos travel
---

I created a website to display my photos and tell the story of my trip to the U.S East Coast with my brother at the end of August 2014.

Go check it out: [travelbook.oertel.fr](http://travelbook.oertel.fr)

![Screenshot](/media/travelbook/screenshot.png)

This post explains my process around this website.

## Why?

I'm disappointed with (free) photos services on Internet such as:

- [Flickr](https://www.flickr.com): confusing as hell, I'm never able to find an album or photos.
- [Picasa](http://picasa.google.com): old, ugly and more and more integrated with Google+.
- [Facebook](http://facebook): even if it's possible to share an album with people not having a Facebook account, the UI is kind of simple.
- [Exposure](http://exposure.co): probably the closest I could have use but I feel like it's limited to few photos and not a whole trip.

Maybe there are good services out there that I didn't heard about, let me know. I needed to define my needs now.

## How could I show my photos?

I'm a developer so I can (theorically) create a service that fits perfectly my needs. I asked myself the following question: *What describes a trip?* and the answer was:

- *Where*: map
- *When*: timeline
- *What*: text
- *Why*: text
- *How*: text
- and the photos of course.


## How to build it?

As I learned by working in a startup:

> create a [MVP](http://en.wikipedia.org/wiki/Minimum_viable_product) (Minimum Viable Product) and then interate on it.

It's where usually my side projects failed before: *I wanted to create the whole project at once* but then gave up in the middle of it by lack of motivation.

### Mandatory features

Features needed before the website would be viable:

- a map with markers where photos were taken
- a timeline: one page per day
- a slideshow for the photos
- a way to generate blocks of photos (auto resizing depending on the photo sizes and number of photos per block)


### None-mandatory features

- a "day" generator. Edit manually a JSON file is enough.
- email webhook. I wanted to be able to create a "day", by sending emails with photos
- internationalization, my audience will be mostly French. English people will have to satisfy themself with the photos.



## What I like about this project?

I was able to try [React](https://github.com/facebook/react). Usually for most of frameworks I try, I'm expecting the worth but I have been pleasantly surprised. The next step is to update the code with Facebook [Flux](https://github.com/facebook/flux) architecture.

Another new service/framework I wanted to test was [MapBox](https://www.mapbox.com). I was confused with their [JavaScript SDK](https://www.mapbox.com/mapbox.js/api/v2.1.4/) (layer on top of [Leaflet](http://leafletjs.com/)). I need to spend more time reading the documentation and understand the different notions (`Feature`, `Layer`, `Marker`, etc.) in order to grok[^1] it.

And for a none-technical point of view, the temporal notion of the website allows me to relive my vacation by sorting my photos one day at a time (I was too lazy to make the whole trip at once) and also keep improving the website piece by piece.

And most importantly, it's accessible to a vast majority of my friends and family (compare to my others projects which are more technical).


## What's next?

Besides small [bugs and improvements](https://github.com/boertel/travelbook/issues) I can/need to do, I would like to create a backend where I could create a "day" with an user interface and keep the current project for the frontend part. It may wait my next long trip.


#### Footnotes:

[^1]: [en.wikipedia.org/wiki/Grok](http://en.wikipedia.org/wiki/Grok), I'm reading [*Stranger in a Strange Land*](http://en.wikipedia.org/wiki/Stranger_in_a_Strange_Land) while writing this post.
