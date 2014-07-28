'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var Configuration = require('dependency-injection/Configuration')
    , DIFactory = require('dependency-injection/DIFactory')
    , config = new Configuration(__dirname + '/config/services.js', process.env.NODE_ENV)
    , factory = new DIFactory(config)
    ;

factory.create();
