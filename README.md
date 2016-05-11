# Web Extension HLS

Allows HLS playback in browsers supporting [WebExtensions] and [MediaSource]

[WebExtensions]:https://developer.chrome.com/extensions
[MediaSource]:https://www.w3.org/TR/media-source/

# Usage

1. Install extension from [chrome webstore][] or [firefox addons][]
2. Click on any m3u8 link inside chrome to play it directly in a new tab

[chrome webstore]: https://chrome.google.com/webstore/detail/native-hls-playback/emnphkkblegpebimobpbekeedfgemhof
[firefox addons]: https://addons.mozilla.org/en-US/firefox/addon/webextension-hls

# Some Developer Notes

By default, Chrome and Firefox download any m3u8 files that they will get. This plugin checks links to see if there are m3u8.
When that's the case, it opens a new tab on a video player that uses the [hlsjs][] library. This extension is just a wrapper of [hlsjs][] for chrome and Firefox

[hlsjs]: https://github.com/dailymotion/hls.js

# TODOs

1. Play video element with an m3u8 source using hlsjs

#License
Released under [Apache 2.0 License](LICENSE)
