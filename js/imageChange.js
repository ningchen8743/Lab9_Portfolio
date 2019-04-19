"use strict";

// event on the index page

(function() {
    let widgetList = document.getElementsByClassName('widget');
    let spanList = [];
    let otherWidgetList = [];
    let divList = [];

    // initialize data
    for(let i = 0; i < widgetList.length; ++i) {
        let widget = widgetList[i];

        let span = widget.nextSibling.nextSibling.childNodes[1];
        spanList.push(span);

        let otherWidget = widget.nextSibling.nextSibling.childNodes[3];
        otherWidgetList.push(otherWidget);
        
        let div = widget.nextSibling.nextSibling;
        divList.push(div);
    }

    // set up
    for(let i = 0; i < widgetList.length; ++i) {
        let widget = widgetList[i];
        let span = spanList[i];
        let otherWidget = otherWidgetList[i];
        let div = divList[i];

        widget.onclick = function() {
            div.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            div.style.display = "none";
        }
    }
})();



