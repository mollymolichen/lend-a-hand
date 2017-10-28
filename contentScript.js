

var elements = document.querySelectorAll('[data-text="true"]');
var post = elements[0].innerHTML;
var res = post.split(" ");

var words = new Set();

words.add("suicide");
words.add("fml");
words.add("sucks");

console.log(words);


for (i = 0; i < res.length; i++) { 
    if (words.has(res[i])){
		alert("Don't suicide");
	}
}

