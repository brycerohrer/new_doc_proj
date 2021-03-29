chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://docs.new";
    chrome.tabs.create({ url: newURL });
  });