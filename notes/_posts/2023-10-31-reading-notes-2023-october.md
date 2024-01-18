---
layout: post
title: Reading Notes, October 2023
permalink: reading-notes-2023-october
description: Reading notes for October 2023
tags:
---

### Article: "[It's not the app it's the apptitude](https://chriscoyier.net/2023/10/03/its-not-the-app-its-the-apptitude/)" by Chris Coyier

> I [...] eye them [note-taking apps] up heavily, wondering if I could do better. But probably not. Thinking takes place in your brain.

Software doesn't make you smarter.

### Article: "[We don't have Seniors anymore](https://sibelius.substack.com/p/we-dont-have-seniors-anymore)" by Sibelius Seraphini

It introduces the two concepts of Packers:

> Their knowledge is a stack of these knowledge packets. Examples of knowledge packets: we use React to build frontend applications; we store data in a SQL database; we use Heroku to deploy to production.

and Mappers:

> Mappers use these knowledge packets to build a mental model of the world. The mental model gives an understanding of cause and effect within a situation. This understanding allows us to derive a solution to any problem within a situation

### Article: "[Demo-driven development](https://www.rubick.com/demo-driven-development/)" by Jade Rubick

Demo on Friday. Set what will be in the demos for the next few weeks. These aren't commitment more guesses and can be adjusted. For the technical side, get a plan in writing. User stories instead of task: "a user can select a color for the chart in a dashboard" and these will be demo-ed.

### "[How Linear builds product](https://www.lennysnewsletter.com/p/how-linear-builds-product)" by Lenny Rachitsky

> 1. _No product managers, just a head of product_. PM duties are distributed across engineering and design.
>
> 2. _No durable cross-functional teams_. Teams assemble around a project and disperse once the project is done.
>
> 3. _No metrics-based goals_. Just a North Star company-level metric goal.
>
> 4. _No A/B tests_. Decisions are based on taste and opinions.
>
> 5. _Job candidates go through a paid work trial_. They join the team for 1-5 days and work on a real project with the team.
>
> 6. _The team is completely remote_. And always has been.

### Article: "[Soft skill books that will make you a better developer](https://addyosmani.com/blog/soft-skills-books/)" by Addy Osmani

These are the books: [books.zaps.dev](https://books.zaps.dev/) and take aways for them.

> - Master the art of deep focus. Schedule uninterrupted blocks for key work and reduce distractions.
> - Optimize for high-leverage activities. Prioritize the 20% of work that drives 80% of outcomes vs. reacting to every notification.
> - Cultivate a growth mindset. View challenges as learning opportunities, not failures. Embrace constructive criticism and feedback.
>   example: no idea how bluetooth worked.
> - Continuously iterate and validate assumptions. Rapidly build MVPs, get user feedback, measure data. Pivot early.
> - Proactively level up leadership skills. Coach teammates, set clear goals, foster psychological safety and authentic communication.

> Think Again:
>
> - Question your core assumptions and beliefs regularly. Be willing to change any view with new evidence.

> Debugging Teams:
>
> - Look for process and communication problems before blaming people. Ask why before who.
> - Rotate team members between positions to build empathy and avoid silos.
> - Codify tribal knowledge and assumptions. Make work visible to spot gaps.

> High Output Management:
>
> - Set clear, measurable goals. Break down strategy into specific, concrete tasks.
> - Give frequent coaching and feedback focused on performance, not the person.
> - Delegate responsibility, but follow up on results. Inspect what you expect.

> Decisive:
>
> - Widen options before deciding - don't default to obvious choices. Consider more.
> - Prepare to be wrong. Have plans to quickly recognize and recover from mistakes.

> Start with Why:
>
> - Communicate from the inside-out. Start communications by explaining why you do what you do.

### Video: "[Cache Rules Everything](https://www.youtube.com/watch?v=qVQjGwm_mmw)" by Harry Roberts

You only have 2 jobs: caching and revalidating. You need to 2 headers: `cache-control` and `etag`. Get rid of `pragma` (actually harmful), `Last-Modified` (can return false positive), and `expires` (not enough control)

### Ask HN: "[How to be a manager? Any good sources for learning how to delegate?](https://news.ycombinator.com/item?id=37880690")"

> It may be counter intuitive, but from my point of view, when you start managing individual contributors, YOU start working for them. Even though you are able to delegate work, a good part of your job is to clarify what needs to be done, how, etc

and the other way too:

> It goes the other way too, plenty of ICs think they work for their manager. How do you convince them otherwise?

### Article: "[Write more "useless" software](https://ntietz.com/blog/write-more-useless-software/)" by nicole@web

Useless softwares are fun! it is like playing.

> When you spend all day working on useful things, doing the work, it's easy for that spark of joy to go out. And having it go out? That's a fear I've heard from some folks who are switching careers or making programming more of a focus of their daily work. When you have to do things, those daily pressures tamp down on excitement. Everything you do is coupled with obligations and is associated with work itself.
>
> You lose the aspect of play that is so important.

### Article: "[Software engineering is about thinking, not typing](https://jordankaye.dev/posts/thinking-not-typing/)" by Jordan Kaye

How to balance writing code and thinking. Too much of one or the other can be harmful

> - If the problem is completely novel, attempting to write some code can be a good way to better understand the problem space
> - Writing code is, for many engineers, a lot more fun and approachable than sitting around and thinking about problems in the abstract
> - Spending too much time thinking and planning ahead of time can be just as bad as not spending enough; how does one know when to stop thinking and start doing?
>   One approach that I like to use personally is to identify what I think of as the core concepts that underlie the problem at hand. Most problems can be decomposed into constituent ideas that are more or less independent from one another.

### Article: "[How to go from Senior to Lead](https://swizec.com/blog/how-to-go-from-senior-to-lead/])"

A pick of a few things that a lead should do:

> - Notice friction points in the code and go fix them
> - Ask about the business outcomes of your work
> - Suggest ideas that drive business results
> - Push back on ideas that don't drive business outcomes
> - Ask about company plans and goals for the next 3 months, 6months, 1 year
> - Use that knowledge to prioritize your own work
> - Funnel long-term strategy into your technical decisions. Refactoring a service that's dormant may not be worth the work, but if the team is about to invest heavy time into this area, you may be on to something
> - Bushwhack for your team – venture ahead of the work and come back with a map
> - Run around making small quality of life improvements. 5 minutes of work can have huge compounding returns
> - Help. When a coworker gets stuck, be the first to jump
> - Look for process friction and suggest improvements
> - Brag for your team. When the team does something cool, tell otherwise
> - Notice other people's achievements. If someone did something you liked, tell them. Even if not on your teams

Some are fun, some aren't.
