---
layout: post
title: Automate Height.app workflow
permalink: height-automation
tags:
---

Every so and then I feel the need to reflect on my "work workflow". I optimized my [calendar](https://ben.oertel.fr/calva), my [git](https://ben.oertel.fr/gite), my [terminal workflow](https://github.com/boertel/t) and more. Today I'm optimizing the **task management workflow** for me and my team.

I'm using [height.app](https://height.app) which provides a nice and simple API[^1] and webhook, I can try to shape height.app as much as possible to make it happen.

Here are the 2 automations I added:

1. Set `start date` automatically when moving a task from "to do" to "in progress".
2. Mark a task as "Done" when a PR has been merged into the default branch.

You can set up the same automations on Cloudflare worker and even extend to support more by checking out my GitHub repository:

<div class="cta">
    <a href="https://github.com/boertel/height-automation" target="_blank">boertel/height-automation</a>
</div>

### Footnotes

[^1]: they are providing a "workspace access token" and any product targeting developers should do the same. It is some more convenient than dealing with an OAuth2 flow just to hack around the product.
