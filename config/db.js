"use strict";
const initOptions = {
    // initialization options;
};
const pgp = require('pg-promise')(initOptions);

const protocol =  process.env.DBSERVER_PROTOCOL;
const user = process.env.DBSERVER_USER;
const password = process.env.DBSERVER_PASSWORD;
const uri = process.env.DBSERVER_URI;
const port = process.env.DBSERVER_PORT;
const dbName = process.env.DBNAME;

const cn = `${protocol}://${user}:${password}@${uri}:${port}/${dbName}`;
const db = pgp(cn);

module.exports = db;