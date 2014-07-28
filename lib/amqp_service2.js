'use strict';

var AmqpService2 = function (amqp) {
    this.amqp = amqp;
};

AmqpService2.prototype.connect = function () {
    if (this.amqp.connected) {
        return;
    }
    
    this.amqp.connect();
};

module.exports = AmqpService2;