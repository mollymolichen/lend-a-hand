chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.executeScript({
        // code: '';  grab code from FB page

        var elements = document.querySelectorAll('[data-text="true"]');
		var post = elements[0].innerHTML;

		var words = new Set();

		words.add("suicide");
		words.add("fml");
		words.add("sucks");

		console.log(words);

		if (words.has(post)){
			alert("Don't suicide");
		}
        
    });
});