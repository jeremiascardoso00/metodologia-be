
const key = 'shhhhh';
const validateData = require('../../utils/validateData');
const authService = require('../../services/authServices');

let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');


const login = async (req,res)=>{

  //validacion de usuarios cambiar el esqueña de validacion
  //let validacion = await validateData(req.body, 'simpleLoginValidationData');
  
  //if (validacion.valid){

    let usuarioEncontrado = await authService.validateUser(req);

    let compare = bcrypt.compareSync(req.body.password, usuarioEncontrado.password);
    if(!compare){
      res.json ({
        code: 400,
        message : 'Invalid Password.'
      });
    }
    else{
      let token = jwt.sign({usuarioEncontrado}, key);
      res.json( {
        code: 200,
        message : 'Correct login',
        token: token
      });
    }
  /*}else{
    res.json({
      code: 404,
      message : "Usuario no registrado"
    });
  }*/
  
}

module.exports = login;