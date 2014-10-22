window.onload = function() {
  // Get users baskets and friends
  // ================================
  request_handler('http://www.mybasketsapp.com/users_folders', '.basket-list')
  request_handler('http://www.mybasketsapp.com/users_friends', '.friend-list')
  // request_handler('http://www.localhost:3000.com/users_folders', '.basket-list')
  // request_handler('http://www.localhost:3000.com/users_friends', '.friend-list')

  // Get current url
  // ================================
  chrome.tabs.getSelected(null, function(tab) {
      tabUrl = tab.url;
  });

  // Check character count of message
  // ================================
  var area = document.getElementById("note");
  var message = document.getElementById("message");
  var maxLength = 64;

  function checkLength() {
      var charsLeft = maxLength - area.value.length;

      if(charsLeft < 5){
        $('#message').css("color", "red");
      } else {
        $('#message').css("color", "black");
      }

      message.innerHTML = (charsLeft) + " characters remainging";
  }
  setInterval(checkLength, 100);

  // Save a link to a basket
  // ================================
  $('.basket-list').on('click', '.basket-click', function(){
    $('.basket-click').removeClass('highlight');
    $('.friend-container').removeClass('highlight');

    var folderName = $(this).text();
    var folderId = $(this).attr('value');
    
    $(this).addClass('highlight'),

    
    $('.alert').text('Save link to ' + folderName)
    $('.btn-text').text('Save')

    $('.note-container').slideDown("medium", function(){});

    $('.cancel-btn').on('click', function(){
      $('.note-container').slideUp("medium", function(){})
    })

    $('.send-btn-button').on('click', function(){
      if (area.value.length > maxLength){
        $('.alert').text('Message cannot be greater than 64 characters!').css('color', 'red');
      } else {
        messageText = $('textarea#note').val();
        sendData('new_link', folderId, messageText, tabUrl)
        $('.alert').text('Link saved to ' + folderName).css('color', 'black');
        $('.note-container').slideUp("medium", function(){});
      };
    });
  })

  // Send a link to a friend
  // ================================
  $('.friend-list-wrapper').on('click', '.friend-container', function(){
    $('.basket-click').removeClass('highlight');
    $('.friend-container').removeClass('highlight');

    var friendName = $(this).text();
    var friendId = $(this).attr('value');

    $(this).addClass('highlight'),

    $('.alert').text('Send this link to ' + friendName)
    $('.btn-text').text('Send')
    
    $('.note-container').slideDown("medium", function(){})

    $('.cancel-btn').on('click', function(){
      $('.note-container').slideUp("medium", function(){})
    })

    $('.send-btn-button').on('click', function(){
      if (area.value.length > maxLength){
        $('.alert').text('Message cannot be greater than 64 characters!').css('color', 'red');
      } else {
        messageText = $('textarea#note').val();
        sendData('sent_link', friendId, messageText, tabUrl)
        $('.alert').text('Link sent to ' + friendName).css('color', 'black');
        $('.note-container').slideUp("medium", function(){});
      };
    });
  })
};





function request_handler(url, changed_div) {
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.onreadystatechange = function(){
      // successful response
      if (req.readyState==4 && req.status==200) {
          // console.log(req.responseText);
          console.log(req.responseText);
          document.querySelector(changed_div).innerHTML = (req.responseText);
      }
  }
  req.send();
}

function sendData(path, id, message, url){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {
      pageInfo = response.page_info;

      var req = new XMLHttpRequest(); 

      req.open("POST", 'http://www.mybasketsapp.com/' + path);
      // req.open("POST", 'http://localhost:3000/' + path);
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      req.send(JSON.stringify({url: url,
                              uniqueId: id,
                              message: message,
                              pageInfo: pageInfo}));

    });  
  });
};


