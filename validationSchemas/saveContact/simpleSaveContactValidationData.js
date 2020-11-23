'use strict';

const regexEmail = require('../../utils/regex').regexEmail;

let simpleSaveContactValidationData = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 1,
        message: 'name',
      },
      email: {
        type: 'string',
        minLength: 1,
        pattern: regexEmail,
        message: 'email',
      },
      phone_number: {
        type: 'string',
        minLength: 1,
        message: 'phone_number',
      },
      message: {
        type: 'string',
        minLength: 1,
        message: 'message',
      },
    },
    required: ['name', 'email', 'phone_number', 'message'],
  };
  
  module.exports = simpleSaveContactValidationData;