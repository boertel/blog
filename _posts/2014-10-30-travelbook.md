---
layout: post
title: Travelbook
tags: projects travelbook photos travel
---

I created a website to display my photos and narrate my trip to the U.S East Coast with my brother at the end of August 2014.

Go check it out: [travelbook.oertel.fr](http://travelbook.oertel.fr)

This post explains my process around this website.

## Why?

I'm disappointed with (free) photos services on Internet such as:

- [Flickr](https://www.flickr.com): confusing as hell, I'm never able to find an album or photos.
- [Picasa](http://picasa.google.com): old, ugly and more and more integrated with Google+.
- [Facebook](http://facebook): even if it's possible to share an album with people not having a Facebook account, the UI is kind of simple.
- [Exposure](http://exposure.co): probably the closest I could use but I feel like it's limited to few photos and not a whole trip.

Maybe there are good services that I didn't heard about, let me know.

## How could I show my photos?

I'm a developer so I can (theorically) create a service that fits perfectly my needs. I asked myself the following question: *What describes a trip?* and the answer was:

- *Where*: a map
- *When*: a timeline
- *What*: text
- *Why*: text
- *How*: text


## How to build it?

As I learned by working in a startup:

> create a [MVP](http://en.wikipedia.org/wiki/Minimum_viable_product) (Minimum Viable Product) and then interate on it.

It's where usually my side projects failed before: *I wanted to create the whole project at once* but then gave up in the middle of it by lack of motivation.

### Mandatory features

Features needed before the website would be viable:

- a map with markers where photos were taken
- a timeline: one page per day
- a slideshow for the photos
- a way to generate blocks of photos

And then I will see how it goes from that.



## What I like about this project?

I was able to try [React](https://github.com/facebook/react) since I has been pleasantly surprised (I was expecting something horrible), the next step is to update the code to use their [Flux](https://github.com/facebook/flux) architecture.

Another new service/framework that I wanted to test was [MapBox](https://www.mapbox.com) but I was confused with their [JavaScript SDK]() that is a layer on top of [Leaflet](http://leafletjs.com/). I need to spend more time reading the documentation and understand the different notions (`Feature`, `Layer`, `Marker`, etc.). I'll use it and try to [grok](http://en.wikipedia.org/wiki/Grok)[^1] the SDK.

The temporal notion of the website allows me to revive my vacation by sorting my photos one day at a time and also keep improving the website piece by piece.

And most importantly, it's accessible to my friends and family.


## What's next?

I would like to see the current project as the frontend part and then create a backend where I could create a "day" with an user interface. It may wait my next trip.


#### Footnotes:

[^1]: Yes, I'm reading [*Stranger in a Strange Land*](http://en.wikipedia.org/wiki/Stranger_in_a_Strange_Land) while writing this post.
