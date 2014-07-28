'use strict';

var amqp = require('amqp');

var AmqpClient = function (config) {
    this.config = config;

    this.connection = null;
};

AmqpClient.prototype.connect = function () {
    this.connection = amqp.createConnection(this.config.connection);
};

module.exports = AmqpClient;
