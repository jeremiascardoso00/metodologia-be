'use strict'
const path = require('path');
const dotenv = require('dotenv');
 
function config(){
    try{
       let env = process.env.ENV;
       switch(env){
           case 'prod':
               dotenv.config({path: path.resolve('.env.prod')});
               console.log('loading prod configurations');
               break;
           case 'qa':
               dotenv.config({path: path.resolve('.env.qa')});
               console.log('loading qa configurations');
               break;
           default:
               dotenv.config({path: path.resolve('./.env.dev')});
               console.log('loading dev configurations');
               break;
    }
    }catch(e){
       dotenv.config({path: path.resolve('.env.dev')});
    }
}

module.exports = config;