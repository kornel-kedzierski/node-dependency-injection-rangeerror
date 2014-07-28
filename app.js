'use strict';

require(__dirname + '/bootstrap');

var di = global.di
    , service1 = di.get('amqp_service1')
    , service2 = di.get('amqp_service2')
    , service3 = di.get('service3')
    ;