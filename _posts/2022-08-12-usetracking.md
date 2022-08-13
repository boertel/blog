---
layout: post
title: useTracking
permalink: usetracking
tags:
---

I've been spending time hooking up analytics on a few projects and I came across a good pattern (until I change my mind after 6 months of using it :D).
The projects are using React and as any React projects, a lot of things are components: `Sidebar`, `Modal`, `Header`, etc.

Let say you want to track people who are viewing a sidebar X. By tracking you might want to know:

- how many people are viewing the sidebar per day?
- how long are they viewing the sidebar for?

The pattern I found most effective is to rely on `useEffect`:

```typescript
function useTracking(
  {
    onEnter,
    onLeave,
    extra,
  }: {
    onEnter: string;
    onLeave?: string;
    extra?: Record<string, string>;
  },
  dependencies = []
) {
  useEffect(() => {
    analytics.track(onEnter, extra);
    if (onLeave) {
      return () => analytics.track(onLeave, extra);
    }
  }, dependencies);
}
```

<br />
It covers the use case when sidebar is mounted on the page, either by navigating to a route that contains `Sidebar` or by a hide/show `{show ? <Sidebar /> : null}`: we are sending `onEnter`. Then when un-mounting `onLeave`.

Head over to [codepen](https://codepen.io/boertel/pen/MWVqNLr?editors=0011) to see it in action.

### with dependencies

You can also start playing with the `useEffect` dependencies. Let say you have a carousel that displays cards for 3 seconds each, and you want to track when people see these cards.

```typescript
useTracking(
  {
    onEnter: "carousel-card-enter",
    onLeave: "carousel-card-leave",
    extra: {
      cardId,
    },
  },
  [cardId]
);
```

<br />
and here is the [codepen](https://codepen.io/boertel/pen/PoRdMgN?editors=0111) for this example.
