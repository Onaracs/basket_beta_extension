chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    // var tags = document.getElementsByTagName("h1");
    // // var question = typeof(tags);
    // // var question = Object.keys(tags[0]);
    // // var question = tags["length"];
    // // var question = typeof(tags);
    // var question = tags[0].innerText;
    // if (request.greeting == "hello")
    //   sendResponse({farewell: question});

    var info = [];
    var metas = 

    if (request.greeting == "hello")
      sendResponse({farewell: info});
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
