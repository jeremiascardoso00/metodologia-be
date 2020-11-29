const db = require('../config/db');

async function addUser (newUser){
    try{

   
    let query = `INSERT INTO "users" ("firstName", "lastName", "email", "password", "is_admin")
                        VALUES ( $(firstName), $(lastName), $(email), $(password), $(is_admin))`; 
    
    return await db.none(query, newUser); 
    } catch(e) {
        return e;
    }
}

async function validateUser(respuesta){

    
    let query = `SELECT user_id, email, password FROM "users" WHERE "email" = $(email)`;

    try{
         let select = await db.oneOrNone(query, respuesta);
    return select;
    }catch(error){
        console.log(error);
    }
   
}

module.exports = {
    addUser,
    validateUser
};