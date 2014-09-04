chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){

    var info = {};
    var metas = document.getElementsByTagName('meta');

    for (i=0; i < metas.length; i++){
      if (metas[i].name === "og:title" || 
          metas[i].getAttribute("property") === "og:title"){
        info["title"] = metas[i].content;
      } 
      else if (metas[i].name === "og:description" || 
                metas[i].getAttribute("property") === "og:description"){
        info["description"] = metas[i].content;
      } 
      else if (metas[i].name === "og:image" || 
                metas[i].getAttribute("property") === "og:image"){
        info["image"] = metas[i].content;
      } 
    };

    if(info["title"] === undefined){
      var title = document.getElementsByTagName('title')[0].text;
      info["title"] = title;
    };

    if (request.ping == "Send Page Info"){
      sendResponse({page_info: info});
    }
});