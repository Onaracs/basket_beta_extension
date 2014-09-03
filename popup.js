window.onload = function() {
    chrome.tabs.getSelected(null, function(tab) {
        tabUrl = tab.url;
    });

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

    request_handler('http://localhost:3000/users_folders', '.basket-list')
    request_handler('http://localhost:3000/users_friends', '.friend-list')

    $('.basket-list').on('click', '.basket-click', function(){
        var id = $(this).attr('value');
        var req = new XMLHttpRequest(); 
        req.open("POST", 'http://localhost:3000/new_link');
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.send(JSON.stringify({url: tabUrl,
                                basketId: id}));
    })

    $('.friend-list-wrapper').on('click', '.friend-container', function() {
        var id = $(this).attr('value');
        var req = new XMLHttpRequest(); 
        req.open("POST", 'http://localhost:3000/sent_link');
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.send(JSON.stringify({url: tabUrl,
                                friendId: id}));
    })

    $('#click').on('click', function () {
        // chrome.tabs.executeScript(null, { "code": "extension.highlight_h1()" });
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {
                    console.log(response.page_info);
            });  
        });
    });
}