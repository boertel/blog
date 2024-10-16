---
layout: post
title: Crontab & Caltrain
permalink: crontrain
tags: crontab bash caltrain
---

I'm living in San Francisco, working in Palo Alto (40 miles away) and I'm taking the train every day to get to work (and go back home). My office is less than 10 minutes from the [Caltrain](http://www.caltrain.com/) station and there are trains every hour: 4:11pm, 5:11pm, 6:11pm.

I don't like to check the clock every 5 minutes in order to not miss a train so I set up a cronjob[^1] to notify me when to leave the office. I slipt the code in 2 commands:

`notify` displays a notification on the Notification Center (OS X)

{% highlight sh %}
#!/bin/bash

# command: notify <text> <title>

osascript -e "display notification \"$1\" with title \"$2\""
{% endhighlight %}

`loctify` displays a notification (through the previous command) but only when connected to a specific wifi network (I don't want to be disturbed at home with those notifications)
{% highlight sh %}
#!/bin/bash

# command: loctify <text> <title> [<ssid>]

# ssid can be a regex, "my_wifi\*" would work for "my_wifi1", "my_wifi2234", etc.

SSID="$(/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I | sed -e "s/^ \*SSID: //p" -e d)"

if [[-z "$3" || $SSID == $3]]; then
/usr/local/bin/notify "$@"
fi
{% endhighlight %}

and beside the 2 commands, the final step is to set up the `crontab`:

{% highlight sh %}
SSID="<YOUR_SSID>"
CALTRAIN_TITLE="Caltrain Alert"

55 15-18 \* _ 1-5 /usr/local/bin/loctify "Caltrain in 15 minutes" "$CALTRAIN_TITLE" "$SSID" > /dev/null 2>&1
58 15-18 _ _ 1-5 /usr/local/bin/loctify "SAFE to leave. Caltrain in 12 minutes" "$CALTRAIN_TITLE" "$SSID" > /dev/null 2>&1
00 16-19 _ _ 1-5 /usr/local/bin/loctify "LEAVE NOW. Caltrain in 10 minutes" "$CALTRAIN_TITLE" "$SSID" > /dev/null 2>&1
11 16-19 _ \* 1-5 /usr/local/bin/loctify "Caltrain left. Next in 1 hour" "$CALTRAIN_TITLE" "$SSID" > /dev/null 2>&1
{% endhighlight %}

The first rule is to run the command at 15:55, 16:55, 17:55 and 18:55. The second runs at 58, etc.

And here is the result:

![Notification](/media/crontrain/notification.png)

If you are interested to use this on your computer, you can get the code on my github (being comfortable with shell is strongly recommended):

<div class="cta octicon">
    <a href="https://github.com/boertel/crontrain" target="_blank">boertel/crontrain</a>
</div>

## Next steps

It would be nice to be notify when Caltrain is late/delayed. One thing I can think off is to listen to tweets from [@caltrain_news](https://twitter.com/caltrain_news) and somehow parse them to see if trains are delayed.

#### Footnotes:

[^1]: [cronjob](http://en.wikipedia.org/wiki/Cron): program executed at a specific (usually recurring) time.
