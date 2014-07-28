'use strict';

module.exports = {
    "common": {
        "setup": {
            "expose": true
        },
        "includes": [
            "./sections/amqp_client.js"
        ],
        "parameters": {
            "rootDir": __dirname + "/.."
        },
        "services": {
            "amqp_client": {
                "service": "%rootDir%/lib/amqp_client",
                "arguments": [ "%amqp_client%" ]
            },
            "amqp_service1": {
                "service": "%rootDir%/lib/amqp_service1",
                "arguments": [ "@amqp_client" ],
                "setup": {
                    "connect": []
                }
            },
            "amqp_service2": {
                "service": "%rootDir%/lib/amqp_service1",
                "arguments": [ "@amqp_client" ],
                "setup": {
                    "connect": []
                }
            },
            "service3": {
                "service": "%rootDir%/lib/service3",
                "arguments": [ "@amqp_service2" ]
            }
        }
    }
};
