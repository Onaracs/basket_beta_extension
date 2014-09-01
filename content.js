chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    // console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension");
    // var tags = document.getElementsByTagName('h1');
    var tags = []
    if (request.greeting == "hello")
      sendResponse({farewell: tags});
  });

// var extension = {
//   highlight_h1 : function () {
//       // Find all h1 tags
//       chrome.extension.sendMessage("bgogcampbciokhjmfngmmohnknmgoaff",{ value: tags })
     
//       // Add a red border to each of them
//       for (var i=0; i<tags.length; i++) {
//           tags[i].style.border = '5px solid red';
//       }
//   }
// };
