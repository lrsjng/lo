const jquery = require('jquery');

let doc_title;
let html_id;
let html_class;
let body_id;
let body_class;
let $pinned_els;

const pin = () => {
    doc_title = global.window.document.title;
    html_id = jquery('html').attr('id');
    html_class = jquery('html').attr('class');
    body_id = jquery('body').attr('id');
    body_class = jquery('body').attr('class');
    $pinned_els = jquery('head,body').children();
};

const restore = () => {
    global.window.document.title = doc_title;
    jquery('html').attr('id', html_id).attr('class', html_class);
    jquery('body').attr('id', body_id).attr('class', body_class);
    jquery('head,body').children().not($pinned_els).remove();
};

module.exports = {
    lo: require('../lib'),
    pin,
    restore
};
