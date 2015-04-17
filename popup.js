// window.onload = function() {
//   // Get users baskets and friends
//   // ================================
//   request_handler('http://www.mybasketsapp.com/users_friends', '.friend-list-wrapper')
//   // request_handler('http://www.mybasketsapp.com/users_folders', '.basket-list')
//   // request_handler('http://www.mybasketsapp.com/users_inbox_links', '.shared-link-list')

//   // Get current url
//   // ================================
//   chrome.tabs.getSelected(null, function(tab) {
//       tabUrl = tab.url;
//   });

//   $('.basket-select').on('click', function(){
//     $('.friend-select.highlight-select').removeClass('highlight-select');
//     $('.inbox-select.highlight-select').removeClass('highlight-select');
//     $('.send-btn').show();
//     $('.basket-select').addClass('highlight-select');
//       request_handler('http://www.mybasketsapp.com/users_folders', '.basket-list')
//     $('.alert').html('Save to: ' + '<p class="basket-name-alert"></p>')
//     $('.btn-text').html('Save')

//     $('.basket-list').show();
//     $('.friend-list-wrapper').hide();
//     $('.shared-link-list').hide();
//   });

//   $('.friend-select').on('click', function(){
//     $('.basket-select.highlight-select').removeClass('highlight-select');
//     $('.inbox-select.highlight-select').removeClass('highlight-select');
//     $('.send-btn').show();
//     $('.friend-select').addClass('highlight-select');
//     $('.alert').html('Send to: ' + '<p class="friend-name-alert"></p>')
//     $('.btn-text').html('Send')

//     $('.friend-list-wrapper').show();
//     $('.basket-list').hide();
//     $('.shared-link-list').hide();
//   });

//   $('.inbox-select').on('click', function(){
//     $('.friend-select.highlight-select').removeClass('highlight-select');
//     $('.basket-select.highlight-select').removeClass('highlight-select');
//     $('.send-btn').hide();
//     $('.alert').html('Links sent to you')
//     $('.inbox-select').addClass('highlight-select');
//       request_handler('http://www.mybasketsapp.com/users_inbox_links', '.shared-link-list')

//     $('.shared-link-list').show();
//     $('.basket-list').hide();
//     $('.friend-list-wrapper').hide();
//   });

//   // Check character count of message
//   // ================================
//   var area = document.getElementById("note");
//   var message = document.getElementById("message");
//   var maxLength = 64;

//   function checkLength() {
//       var charsLeft = maxLength - area.value.length;

//       if(charsLeft < 5){
//         $('#message').css("color", "red");
//       } else {
//         $('#message').css("color", "black");
//       }

//       message.innerHTML = (charsLeft);
//   }
//   setInterval(checkLength, 100);

//   // Save a link to a basket
//   // ================================
//   $('.basket-list').on('click', '.basket-click', function(){
//     $('.basket-click').removeClass('send-basket-select');
//     $(this).addClass('send-basket-select');
//     var folderName = $(this).text();
//     var folderId = $(this).attr('value');
    
//     $('.basket-name-alert').text(folderName)

//     $('.send-btn-button').on('click', function(){
//       if (area.value.length > maxLength){
//         $('.alert').text('Message cannot be greater than 64 characters!').css('color', 'red');
//       } else {
//         messageText = $('textarea#note').val();
//         sendData('new_link', folderId, messageText, tabUrl)
//         $('.alert').text('Link saved to ' + folderName).css('color', 'black');
//       };
//     });
//   })

//   // Send a link to a friend
//   // ================================
//   $('.friend-list-wrapper').on('click', '.friend-container', function() {
//     $('.friend-container').removeClass('send-friend-select');
//     $(this).addClass('send-friend-select');
//     var friendName = $(this).text();
//     var friendId = $(this).attr('value');

//     // $(this).addClass('highlight'),

//     $('.friend-name-alert').text(friendName)

//     $('.send-btn-button').on('click', function(){
//       if (area.value.length > maxLength){
//         $('.alert').text('Message cannot be greater than 64 characters!').css('color', 'red');
//       } else {
//         messageText = $('textarea#note').val();
//         sendData('sent_link', friendId, messageText, tabUrl)
//         $('.alert').text('Link sent to ' + friendName).css('color', 'black');
//       };
//     });
//   })
// };

// function request_handler(url, changed_div) {
//   var req = new XMLHttpRequest();
//   req.open('GET', url, true);
//   req.onreadystatechange = function(){
//       // successful response
//       if (req.readyState==4 && req.status==200) {
//           // console.log(req.responseText);
//           console.log(req.responseText);
//           document.querySelector(changed_div).innerHTML = (req.responseText);
//       }
//   }
//   req.send();
// }

// function sendData(path, id, message, url){
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {
//       pageInfo = response.page_info;

//       var req = new XMLHttpRequest(); 

//       req.open("POST", 'http://www.mybasketsapp.com/' + path);
//       // req.open("POST", 'http://localhost:3000/' + path);
//       req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//       req.send(JSON.stringify({url: url,
//                               uniqueId: id,
//                               message: message,
//                               pageInfo: pageInfo}));

//     });  
//   });
// };


