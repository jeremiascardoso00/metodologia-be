'use strict';

const regexEmail = require('../../utils/regex').regexEmail;
const regexPassword = require('../../utils/regex').regexPassword;

let simpleRegistrationValidationData = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      minLength: 1,
      message: 'firstName',
    },
    lastName: {
        type: 'string',
        minLength: 1,
        message: 'firstName',
    },
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
  required: ['firstName', 'lastName', 'email', 'password'],
};

module.exports = simpleRegistrationValidationData;
