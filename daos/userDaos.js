const db = require('../config/db');


async function getUserPermissions (userId){
    let query = `SELECT "is_admin" FROM "users"
                WHERE "users.user_id" = $(userId)`; 
    
    return await db.none(query, userId);
}

module.exports = {
    getUserPermissions,
};
