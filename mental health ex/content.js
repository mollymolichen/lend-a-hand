var flaggedExpressions = [
    /suicide/i,
    /kill myself/i,
    /death/i
];

function performSuicidePrevention() {
    // Example, do something
    alert('HackDuke PoC: Your writing contains unhealthy language.  Please reach out ...');
}


// JQuery Selector Format
$('input').on('input',function(e) {
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
});