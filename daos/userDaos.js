const db = require('../config/db');

async function getUserPermissions(userId){
    try{
        let query = `SELECT users."is_admin" FROM public.users
        WHERE users."user_id" = $(user_id)`; 
        
        return await db.query(query, userId);
    } catch(e){
        return e;
    }
    
}

module.exports = {
    getUserPermissions,
};
