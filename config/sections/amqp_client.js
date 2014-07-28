'use strict';

module.exports = {
    parameters: {
        amqp_client: {
            connection: {
                host: 'localhost',
                port: 5672,
                login: 'guest',
                password: 'guest',
                vhost:'/'
            }
        }
    }
};