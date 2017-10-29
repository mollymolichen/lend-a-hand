var flaggedExpressions = [
    /suicide/i,
    /kill myself/i,
    /death/i,
    /suicide/i,
    /kill myself/i,
];

function oldPerformSuicidePrevention() {
    // Example, do something
    // alert('HackDuke PoC: Your writing contains unhealthy language.  Please reach out ...');
}

// $("#myDiv")[0] === document.getElementById("myDiv");
// $(this)[0] === this

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

function pastThreshold(){
    // given a JSON output from .py, calculate whether sentiment < threshold
    // if so, output popup
}

// JQuery Selector Format
    // pass file to sentimentRead.py
    // fileRead(fileName)
$('input').on('input',function(e) {
    // get link to input.txt
    /*$(this)[0].addEventListener('click', function(){        // questionable
        var link = document.createElement('a');
        link.setAttribute('download', 'user_input.txt');
        link.href = makeTextFile($('textarea')[0].value);
        document.body.appendChild(link);

        // wait for link to be added to document
        window.requestAnimationFrame(function(){
            var event = new MouseEvent('click');
            link.dispatchEvent(event);
            document.body.removeChild(link);
        })
    }, false);*/
    var textElements = document.querySelectorAll('[data-text="true"]')[0];
    var userInput = elements.innerHTML;

    //@app.route("sentimentRead.py")
    //def returnFile():


    $.ajax({
        type: "POST",
        url: "sentimentRead.py",
        data: {
            param: userInput
        }
    }).done(function(arg){
        // do something
    });

    // see if input contains any flagged expressions
    for (var i=0, len = flaggedExpressions.length; i < len; i++) {
        if (pastThreshold){
            performSuicidePrevention(); 
        }
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
});