window.onload = function() {
  chrome.tabs.getSelected(null, function(tab) {
      tabUrl = tab.url;
  });

  request_handler('http://www.mybasketsapp.com/users_folders', '.basket-list')
  request_handler('http://www.mybasketsapp.com/users_friends', '.friend-list')

  $('.basket-list').on('click', '.basket-click', function(){
    var folderName = $(this).text();
    $(this).css({"background": "#191919",
                "color": "white"});
    var folderId = $(this).attr('value');
    sendData('new_link', folderId, tabUrl)

    $('.confirmation-message').text('You threw a link in your ' +
                                      folderName + ' basket!')
  })

  $('.friend-list-wrapper').on('click', '.friend-container', function(){
    var friendName = $(this).text();
    $(this).css({"background": "#191919",
                "color": "white"});
    var friendId = $(this).attr('value');
    sendData('sent_link', friendId, tabUrl)

    $('.confirmation-message').text('Link sent to ' + friendName)
  })
}

function request_handler(url, changed_div) {
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.onreadystatechange = function(){
      // successful response
      if (req.readyState==4 && req.status==200) {
          // console.log(req.responseText);
          document.querySelector(changed_div).innerHTML = (req.responseText);
      }
  }
  req.send();
}

function sendData(path, id, url){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {
      pageInfo = response.page_info;

      console.log(pageInfo);
      console.log(url);
      var req = new XMLHttpRequest(); 

      req.open("POST", 'http://www.mybasketsapp.com/' + path);
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      req.send(JSON.stringify({url: url,
                              uniqueId: id,
                              pageInfo: pageInfo}));

    });  
  });
};
