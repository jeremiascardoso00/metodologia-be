'use strict';

const regexDate = require('../../utils/regex').regexDate;
const regexHour = require('../../utils/regex').regexHour;

let simpleScheduleValidationData = {
  type: 'object',
  properties: {
    bookings_exhibition_id: {
      type: 'integer',
      minLength: 1,
      message: 'bookings_exhibition_id',
    },
    date: {
        type: 'string',
        minLength: 1,
        pattern: regexDate,
        message: 'date',
    },
    hour: {
      type: 'string',
      minLength: 1,
      pattern: regexHour,
      message: 'hour',
    },
  },
  required: ['bookings_exhibition_id', 'date', 'hour'],
};

module.exports = simpleScheduleValidationData;