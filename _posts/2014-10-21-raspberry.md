---
layout: post
title: Raspberry Pi, Bluetooth, Audio and Pain
permalink: raspberry
tags: raspberry a2dp
published: false
---

I bought a Raspberry Pi on January 2014 after getting a [Jambox](Jambox) (Bluetooth speaker). Even if the Jambox is convinent for travelling or using in the garden or kitchen, the sound quality is not as good as stereo speakers. This is the main reason I bought a Raspberry Pi: *to be able to stream audio from my phone or computer to my speakers* (and well, it can be fun to have a tiny computer).

## Failures

I spent my last 10 months trying to make this project work but without success. Using Raspbian as OS for the Raspberry Pi, I could only except to have hiccups: first the sound was making the system to freeze, then the bluetooth wasn't working, pulseaudio was complaining about dbus. Every now and then, I would give a try to a new release of Raspbian but even if there were some improvements, it was always a failure.

## Success

Once again, I discovered that there was a new version of Raspbian (release date: [*2014-09-09*](http://www.raspberrypi.org/downloads/)) So as usual I got my hopes up, took out the raspberry pi and ethernet cable, search for the main tutorials:  [kmonkey711](http://kmonkey711.blogspot.com/2012/12/a2dp-audio-on-raspberry-pi.html), [raspberrypi.org forum](http://www.raspberrypi.org/forums/viewtopic.php?t=68779) and [instructables](http://www.instructables.com/id/Turn-your-Raspberry-Pi-into-a-Portable-Bluetooth-A/?ALLSTEPS). And here I was: typing commands, modifying files, rebooting, typing commands, googling error messages, rebooting, modifying files.

## Script

Every tutorial has their perks, I took the good pieces and since I'm a developer and — by nature — lazy, I compile into a script: [boertel/raspbian-a2dp](https://www.github.com/boertel/raspian-bluetooth-audio).


## Hints

Because it's sometimes not going as planned, here are few commands to help you find what's wrong.

{% highlight sh %}
/usr/bin/shared/.../list-devices
{% endhighlight %}

Resources:

- [http://rootprompt.apatsch.net/2013/04/23/raspberry-pi-network-audio-player-pulseaudio-dlna-and-bluetooth-a2dp-part-3-bluetooth/]()
- [http://www.sarawuth.com/2013/01/raspberry-pi-as-a2dp-bluetooth-speaker/]()
- [http://blog.mrverrall.co.uk/2013/01/raspberry-pi-a2dp-bluetooth-audio.html]()
- [http://blog.scphillips.com/2013/01/sound-configuration-on-raspberry-pi-with-alsa/]()
- [http://raspberrypihq.com/how-to-add-wifi-to-the-raspberry-pi/]()
- [https://learn.adafruit.com/adafruits-raspberry-pi-lesson-3-network-setup/setting-up-wifi-with-occidentalis]()
