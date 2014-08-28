var extension = {
  highlight_h1 : function () {
      // Find all h1 tags
      var tags = document.getElementsByTagName('h1');
      console.log(tags);
      // Add a red border to each of them
      for (var i=0; i<tags.length; i++) {
          tags[i].style.border = '5px solid red';
      }
  }
};

var test = function(){
  var tags = document.getElementsByTagName('h1');
  chrome.extension.sendMessage("bgogcampbciokhjmfngmmohnknmgoaff",
                                { value: tags })
}