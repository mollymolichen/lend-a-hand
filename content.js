// list of all flagged words marked as triggering
// most of these phrases build on each other, so we only need to find the base 
// phrase to catch all subsequent phrases that build off it
var flaggedExpressions = new Set();
// flaggedExpressions.add("suicide");
// flaggedExpressions.add("suicides");
// flaggedExpressions.add("suicidal");
// flaggedExpressions.add("kill");                         // use as test case
flaggedExpressions.add("commit suicide");
flaggedExpressions.add("committing suicide");
flaggedExpressions.add("want to commit suicide");
flaggedExpressions.add("suicide is the answer");
flaggedExpressions.add("kill myself");
flaggedExpressions.add("kill yo self");
flaggedExpressions.add("kill yo' self");
flaggedExpressions.add("kill your self");
flaggedExpressions.add("kill yourself");
flaggedExpressions.add("wish I were dead");
flaggedExpressions.add("life sucks");
flaggedExpressions.add("life is bad");
flaggedExpressions.add("hopeless");
flaggedExpressions.add("worthless");
flaggedExpressions.add("depressed");
flaggedExpressions.add("better without me");
flaggedExpressions.add("dead");

// treat as main
var textElements = document.querySelectorAll('[data-text="true"]');
var userInput = elements.innerHTML[0];

if (flaggedExpressions.has(userInput)){
    performSuicidePrevention();
}
else {
    chrome.runtime.sendMessage({
        method: 'GET',
        action: 'xhttp',
        url: 'https://dontsuicide.herokuapp.com/?text=' + flaggedExpressions[i];                    
    }, function(responseText){                                                       
            var response = JSON.parse(responseText);
            var key = Object.keys(response)[0];             // "score"
            var threshold = response[key];                  // decimal value 0 <= n <= 1.0
            console.log(key + "The user input returned threshold: " + threshold);
            // if anything less than ambigious
            // NLP algorithm returns 0.5 if unknown or equal %Y, %N
            if (threshold < 0.5){   
                performSuicidePrevention();
            }
    });
}

// popup that displays if potentially triggering content is detected
// requires user response: either keep or discard (preferred) the post
function performSuicidePrevention(){
    var message = "Looks like you posted something concerning.\n Let's redirect you to someone who can help.";
    var title = "Are you OK?";

    $('#label').html(message);
    $('#dialog').dialog({
        resizable: false,
        title: title,
        modal: true,
        width: '400px',
        height: 'auto',
        hide: {
            effect: 'scale',
            duration: 300
        },
        buttons: [
            {
                text: "Cancel my post",
                "class": "cancelButton",
                click: function(){
                    $('#dialog').dialog('close');   // close current window
                    // TODO: how to erase FB status/search? 'input' needs to be a div
                    $('input').empty();
                    $('#helpRedirect')[0].click();  // open link to professional help
                }
            },
            {
                text: "Yes, I still want to post",
                "class": "continueButton",
                click: function(){
                    $('#dialog').dialog('close');   // close current window and return to page
                }
            }
        ]
    });
}

// JQuery Selector Format
/*$('input').on('input',function(e) {
    for (var i=0, len = flaggedExpressions.length; i < len; i++) {
        if (this.value.match(flaggedExpressions[i])) {
            performSuicidePrevention();
        }
    }
});

$('textarea').on('input',function(e) {
    for (var i=0, len = flaggedExpressions.length; i < len; i++) {
        if (this.value.match(flaggedExpressions[i])) {
            performSuicidePrevention();
        }
    }
});*/
