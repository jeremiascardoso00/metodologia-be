
const authService = require('../../services/authServices');

const validateData = require('../../utils/validateData');


let bcrypt = require('bcrypt');
const saltRounds = 10;
const saltPwd1 = bcrypt.genSaltSync(saltRounds);


const register = async (req,res )=> {

        let usuarioEncontrado = await authService.validateUser(req);

        if (usuarioEncontrado){
            
            res.json({
                code: 404,
                message : "Nombre de usuario ocupado.",
                valid: false
            });
        }
        else{
            let psw = bcrypt.hashSync(req.body.password, saltPwd1);

            let registedUser = {
                code: 200,
                message : "Registro correcto.",
                user: req.body.email,
                password: psw,
                valid: true
            }
            //cargar en DB postgreSQL
            try {
                //cambiar a usuarios
                await authService.addUser({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: psw, is_admin: req.body.is_admin});
                res.json(registedUser.message).status(registedUser.code);     
            }
            catch(e){
                res.json(e);
            }
            
        }
}


module.exports = register;