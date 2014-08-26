// chrome.browserAction.onClicked.addListener(function () {
//     chrome.tabs.executeScript(null, { "code": "extension.highlight_h1()" });
// });

chrome.browserAction.onClicked.addListener(function () {
  console.log(tags);
});

