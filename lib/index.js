const {assign} = require('./core');

module.exports = assign({},
    require('./core'),
    require('./dom'),
    require('./binder')
);
