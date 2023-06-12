chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.msg == 'unblur') {
        chrome.tabs.create({ url: 'https://insights-ui.soundcloud.com/' })
    }
})
