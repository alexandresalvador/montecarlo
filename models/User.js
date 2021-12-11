var express = require('express');
var router = express.Router();
const database = require('../database/index');

const Joi = require('joi');

module.exports = Joi.object({
    nome : Joi.string()
              .min(3)
              .max(150),

    email : Joi.string()
                .email({
                 minDomainSegments: 2,
                 tlds: {
                    allow: ['com', 'net', 'br', 'co', 'me', 'arg']
                    }
                }),

    telefone : Joi.number()
             .integer()
             .min(18),
    
    endereco : Joi.string()
             .min(7)
             .max(100),

    senha : Joi.string()
                .min(8)
                .max(15),

});


module.exports = router;