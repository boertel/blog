---
layout: post
title: Replace audio on video
permalink: replace-audio-on-video
tags:
---

To create funny videos, I needed to switch the audio to a song or movie. I got help from 2 commands: [youtube-dl](https://github.com/ytdl-org/youtube-dl) and [ffmpeg](https://ffmpeg.org/)

```
youtube-dl --extract-audio --audio-format mp3 --output new_audio.mp3 "https://youtube.com/watch?v=<video id>"
ffmpeg -i my_video.mp4 -ss "2:06" -i new_audio.mp3 -c copy -map 0:v:0 -map 1:a:0 -shortest funny_video.mp4
```

I'll give credits to: [ffmpeg - replace audio in video](https://superuser.com/a/1137613) to get me the ffmpeg arguments.
