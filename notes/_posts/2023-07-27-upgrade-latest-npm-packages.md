---
layout: post
title: Upgrade latest npm packages
date: 2023-07-27 12:16 -0700
tags: cli
---

I needed to upgrade my [remix](https://remix-run.com) application to the latest. Here is the snippet I came up with

```
npm i $(\
    bat package.json | \
    jq ".dependencies, .devDependencies" | \
    grep "@remix-run/" | \
    cut -d ":" -f 1 | \
    xargs -I {} echo "{}@latest" | tr "\n" " " \
)
```

<br />
Also I re-structure my whole blog to be able to post this snippet. It took me 2 minutes to write the command, and 1 hour to re-structure the blog 😀.
