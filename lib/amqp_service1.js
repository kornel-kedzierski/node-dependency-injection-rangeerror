'use strict';

var AmqpService1 = function (amqp) {
    this.amqp = amqp;
};

AmqpService1.prototype.connect = function () {
    if (this.amqp.connected) {
        return;
    }

    this.amqp.connect();
};

module.exports = AmqpService1;