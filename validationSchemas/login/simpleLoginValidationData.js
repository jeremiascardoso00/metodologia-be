'use strict';

const regexEmail = require('../../utils/regex').regexEmail;
const regexPassword = require('../../utils/regex').regexPassword;


let simpleLoginValidationData = {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        minLength: 1,
        pattern: regexEmail,
        message: 'email',
      },
      password: {
        type: 'string',
        minLength: 1,
        pattern: regexPassword,
        message: 'password',
      },
    },
    required: ['email', 'password'],
  };
  
  module.exports = simpleLoginValidationData;