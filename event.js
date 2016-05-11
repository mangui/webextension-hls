chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // dispatch based on command
  if (request.command == 'playM3u8') {
    var playerUrl = chrome.extension.getURL('player.html') + "#" + btoa(request.url)
    chrome.tabs.create({ url: playerUrl });
  }
});


// we need to use onBeforeSendHeaders instead of onBeforeRequest because of the following FF issue
// https://bugzilla.mozilla.org/show_bug.cgi?id=1176092
chrome.webRequest.onBeforeSendHeaders.addListener(
  function(info) {
    if (info.url.split("?")[0].split("#")[0].endsWith("m3u8") && info.type == "main_frame") {
    	var playerUrl = chrome.extension.getURL('player.html') + "#" + btoa(info.url)

      // redirect on webextension is not working for the moment, refer to https://bugzilla.mozilla.org/show_bug.cgi?id=1256122
    	return { redirectUrl:  playerUrl }
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
