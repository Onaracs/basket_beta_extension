// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//   if (request.greeting == "hello"){
//     var1 = request.var1; // Set variable 1
//     var2 = request.var2; // Set variable 2
//   }
//   else{
//     sendResponse({});    // Stop
//   }
// });

// chrome.runtime.sendNativeMessage("http://127.0.0.1:3000/*", function(e) {
//   e.preventDefault();
//   .ajax({

//   })
// }

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
//   });

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//   console.log(response.farewell);
// });
