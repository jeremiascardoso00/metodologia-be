'use strict';

const tv4 = require('tv4');
const lib = require('../validationSchemas');


function validateData(data, format) {
    
    return tv4.validateMultiple(data, lib[format]);
}

module.exports = validateData;