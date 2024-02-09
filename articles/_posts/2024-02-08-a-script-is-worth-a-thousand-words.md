---
layout: post
title: A script is worth a thousand words
permalink: a-script-is-worth-a-thousand-words
tags:
---

I've been maintaining a few iOS apps for work. The apps are only published on TestFlight and they need to be re-publish every 3 months. This is what the maintenance is about: a slack reminder every 3 months 2 weeks before the expiration of the apps to re-build them and publish them to TestFlight.

When these reminders pop up, it is a pretty dreadful. Is it going to be a smooth ride? are the builds going to work?

I could have written instructions inside README and be done with it. Fortunately, I can thanks my past self for writing bash[^1] scripts to build and publish apps instead. The scripts aren't perfect, they don't cover all use cases, they don't handle errors. But they:

- have all steps needed to build and publish an app
- comments to explain how to run it, and what each step does
- work! It would have been easy to skip updating the step in a README. And stop being accurate a few months in the project.

In short, don't write instructions in a README, write a script and reference it inside your README.

[^1]: it doesn't have to be in bash, use whatever languages you are comfortable with.
