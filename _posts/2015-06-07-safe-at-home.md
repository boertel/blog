---
layout: post
title: Disable or delay annoying login screen
permalink: safe-at-home
tags: bash wifi script
---

I've been thinking of this idea many times, but tonight is the night where I make my idea concrete. What is annoying me is that: *I don't want to enter my password every time my computer goes to sleep when **I'm at home***.

I've set up  "Require password 15 minutes after sleep or screen saver begins" in the "Security & Privacy" settings just to be safe when I'm not around my computer.

![System Preferences](/media/safe-at-home/system-preferences.png)

But do I care that much when I'm at home? mmmhhh, not really. Usually, my computer is in my bedroom, I'm going in the kitchen for a while and then come back later and – boom – *PASSWORD*, it annoys me. It's time for a change.

I've already created another [script](/crontrain) that uses my SSID[^1] to determine if I'm home or somewhere else. Without a second thought, I open `vi`, do few searches to know how to configure the setting with the Terminal. And here is the script that takes care of updating the settings depending on my SSID.

{% highlight sh %}
#!/bin/bash

HOME_ENABLE=1
OUTSIDE_ENABLE=1

HOME_SECONDS=900        # 15 minutes
OUTSIDE_SECONDS=300     # 5 minutes

HOME_SSID="<YOUR SSID>"


SSID="$(/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I | sed -e "s/^  *SSID: //p" -e d)"

AM_I_HOME=0

if [[ $SSID = $HOME_SSID ]]; then
    AM_I_HOME=1
fi

if [[ $AM_I_HOME = 1 ]]; then
    SECONDS=$HOME_SECONDS
    ENABLE=$HOME_ENABLE
else
    SECONDS=$OUTSIDE_SECONDS
    ENABLE=$OUTSIDE_ENABLE
fi


echo "am I home?             : $AM_I_HOME ($SSID = $HOME_SSID)"
echo "ask for password       : $ENABLE"
echo "ask for password after : $SECONDS"
defaults write com.apple.screensaver askForPassword $ENABLE
defaults -currentHost write com.apple.screensaver askForPasswordDelay -int $SECONDS
{% endhighlight %}

Next step is to find a way to call this script when there are a "wifi change", couple of searches later (I'm encountered just now apps that do or seem to do what I'm trying to achieve, but it's too late: I'll built my *own* command – programmer pride).

I end up using: `crankd` command line (part of [MacSysadmin/pymacadmin](https://github.com/MacSysadmin/pymacadmin) repository) which is triggering commands on specific system events including network events. I'm following these [instructions](http://nokyotsu.com/qscripts/2011/03/run-script-in-os-x-on-network.html) to set everything up.

Goodbye annoying login screen.

If you want to use it, go check out the repository on my GitHub account:
<div class="cta">
    <a href="https://github.com/boertel/safe-at-home" target="_blank"><span class="octicon octicon-mark-github"></span>boertel/safe-at-home</a>
</div>


#### Footnotes:

[^1]: [SSID](http://en.wikipedia.org/wiki/SSID): for *S*ervice *S*et *ID*entifier, it's often a human-readable name to identify your wifi network.
