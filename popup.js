// window.onload = function() {
//     console.log("this is loaded")
//     $('#popup').on('click', function() {
//         console.log('This is clicked');
//         // req = new XMLHttpRequest();
//         // test = req.open('GET', 'http://http://localhost:3000/folders');
//         // console.log(test);
//     })
// }
  
//returns the current URL
window.onload = function() {
    chrome.tabs.getSelected(null, function(tab) {
        var tabUrl = tab.url;
        // $('#popup').html(tabUrl);
        document.querySelector('#popup').innerHTML = tabUrl;
    });

    console.log('load event')

    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:3000/folders', true);
    req.onreadystatechange = function(){
        // successful response
        if (req.readyState==4 && req.status==200) {
            console.log(req.responseText);
            // remove jquery here
            $('#test-info').html(req.responseText);
        }
    }
    req.send();

}

// function $()