setTimeout(() => {
    if (window.location.href == 'https://insights-ui.soundcloud.com/') {
    
    let els = document.querySelectorAll('[class*="Blur"]')
        els.forEach(function (el) {
            el.setAttribute('class', '');
        })
    
}
},500)
