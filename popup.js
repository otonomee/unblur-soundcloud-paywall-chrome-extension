

    
        var executeButton = document.querySelector('button');
        executeButton.addEventListener('click', function() {
          
            chrome.runtime.sendMessage({ msg: 'unblur' });
            
          
        });
    

