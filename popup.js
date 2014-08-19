window.onload = function() {
    chrome.tabs.getSelected(null, function(tab) {
        tabUrl = tab.url;
        // $('#popup').html(tabUrl);
        // document.querySelector('#popup').innerHTML = tabUrl;
    });

    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:3000/users_folders', true);
    req.onreadystatechange = function(){
        // successful response
        if (req.readyState==4 && req.status==200) {
            // console.log(req.responseText);
            document.querySelector('.basket-list').innerHTML = (req.responseText);
        }
    }
    req.send();

    $('.basket-list').on('click', '.basket-click', function(){
        var id = $(this).attr('value');
        var req = new XMLHttpRequest(); 
        req.open("POST", 'http://localhost:3000/new_link');
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.send(JSON.stringify({url: tabUrl,
                                basketId: id}));
    })
}