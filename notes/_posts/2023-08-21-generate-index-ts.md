---
layout: post
title: Generate index.ts
permalink: "generate-index-ts"
---

I've been starting to use [shadcn/ui](https://ui.shadcn.com/), and I'm used to import all my UI components from `~/ui` so here is my command to generate it.

```
ls -1 app/ui | \
    grep -v "index" | \
    sed -e "s/^\(.*\)\.tsx/\1/" | \
    xargs -I {} echo "export * from \"./{}\";" > app/ui/index.ts
```
