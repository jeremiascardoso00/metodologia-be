'strict mode';

const authDaos = require('../daos/authDaos');

async function addUser(req){
    let newUser = {
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.email,
        password: req.password,
        is_admin: req.is_admin

    }   
    await authDaos.addUser(newUser);
}

async function validateUser(req){
    let respuesta = {
        email: req.body.email
    }
    let result = await authDaos.validateUser(respuesta);
    return result;
}

module.exports = {
    addUser,
    validateUser
};