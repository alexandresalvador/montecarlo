var express = require('express');
var router = express.Router();
const database = require('../database/index');

const Joi = require('joi');

module.exports = Joi.object({
    tipo : Joi.string()
              .min(3)
              .max(150),

    descricao : Joi.string()
                .max(100),

    preco : Joi.number()
             .integer(),
    

});


module.exports = router;