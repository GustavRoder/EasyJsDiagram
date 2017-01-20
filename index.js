'use strict';

let container = null;
let nodes = [];

$(document).ready(function() {
    container = $('.play-ground');
    makeNode({ left: 100, top: 100 }, 'sq1');
});


function makeNode(location, styleClass) {
    let node = $('<div class="square"></div>');
    node.addClass(styleClass);
    node.css('left', location.left + 'px');
    node.css('top', location.top + 'px');
    container.append(node);
}