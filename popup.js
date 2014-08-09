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
        console.log(tab);
        tabUrl = tab.url;
        $('#popup').html(tabUrl);
    });

    req = new XMLHttpRequest();
    test = req.open('GET', 'http://localhost:3000/folders', true);
    $('#test-info').html(test);
}