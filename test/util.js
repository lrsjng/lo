const jquery = require('jquery');

let title;
let htmlId;
let htmlClasses;
let bodyId;
let bodyClasses;
let $pinnedElements;

const pin = () => {
    title = global.window.document.title;
    htmlId = jquery('html').attr('id');
    htmlClasses = jquery('html').attr('class');
    bodyId = jquery('body').attr('id');
    bodyClasses = jquery('body').attr('class');
    $pinnedElements = jquery('head,body').children();
};

const restore = () => {
    global.window.document.title = title;
    jquery('html').attr('id', htmlId).attr('class', htmlClasses);
    jquery('body').attr('id', bodyId).attr('class', bodyClasses);
    jquery('head,body').children().not($pinnedElements).remove();
};

module.exports = {
    lo: require('../lib'),
    pin,
    restore
};
