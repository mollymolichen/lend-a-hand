

chrome.runtime.onConnect.addListener(function(port) {
  
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "contentScript.js"});
})

