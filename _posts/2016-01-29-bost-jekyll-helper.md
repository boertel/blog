---
layout: post
title: "bost: jekyll helper"
permalink: bost-jekyll-helper
tags: go jekyll cli
---

I started this *not very active* blog about a year and a half ago. As lot of my projects and blogposts, it's about solving a problem that's bothering me.

This time, it's jekyll, the very own system that runs this blog. Each blogpost needs a title, a permalink/slug and tags. For example, this blogpost header looks like this:

{% highlight sh %}
---
    layout: post
    title: "bost: jekyll helper"
    permalink: bost-jekyll-helper
    tags:
---
{% endhighlight %}

and the filename includes the date and the slug: ```2016-01-29-bost-jekyll-helper.md```

Two pain points:

- duplicating the slug in the filename and inside the file itself, and usually it's based on the title itself,
- opening blogposts from the terminal which means knowing the exact date.


This is a perfect opportunity to try out [go](http://golang.com). I could have use *bash* but it's difficult to handle options. My command will provide at least 2 features:

- create a file named with the current date and the slug. And also to write the slug and title inside the file.
- open a blogpost that is the closest to *query* with ```$EDITOR```.

Example:
{% highlight bash %}
> bost create "bost: jekyll helper"
2016-01-29-bost-jekyll-helper.md

> bost open bost
opening 2016-01-29-bost-jekyll-helper.md
{% endhighlight %}

I used [codegangsta/cli](https://github.com/codegangsta/cli) package, that provides everything I need: subcommands, flags, helps, etc. It's really well done.


If you are interested to know more about this command, I invite you to visite github repository:
<div class="cta">
    <a href="https://github.com/boertel/bost" target="_blank"><span class="octicon octicon-mark-github"></span>boertel/bost</a>
</div>
