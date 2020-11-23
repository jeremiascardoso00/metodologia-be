const router = require('express').Router();
const jwt = require('jsonwebtoken');
const userDaos = require('../daos/userDaos');

const key = 'shhhhh';
let tokenContenido;

//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvRW5jb250cmFkbyI6eyJ1c2VyIjoiQWxiZXJ0byIsInBhc3N3b3JkIjoiJDJiJDEwJDVkZkQ5QXExcWh0Qlc0aFNIT2dvVk84RnJFWDdTbWJ5aHF2My82TjFXNm1PUll1QU5JSXJDIn0sImlhdCI6MTU5ODUwOTYxMn0.HtoTEMAfNWXLkJs_SwM3SrG_gDmqKQBKOn-F_3vIHGk'

//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvRW5jb250cmFkbyI6eyJ1c2VyIjoiQWxiZXJ0byIsInBhc3N3b3JkIjoiJDJiJDEwJHZwLnU3Vk1tY08xb3lPeWRQN2tJcE90aklTTW5PSlJ4QS5jaWRHTkI5NVc0UXVhcUp0RHg2In0sImlhdCI6MTU5ODUwNjQwN30.0EYKNvCnEJt_F5qig5xysbwKeQLf_Keb9OgumUx3Zxc'

const tokenValidationAdmin = (req, res, next) => {

    let foreingToken = req.headers['authorization'];
    if (foreingToken) {

        jwt.verify(foreingToken, key, (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Token inválida' });
            } else {
                req.decoded = decoded;
                try {
                    //probar
                    if(await userDaos.getUserPermissions({userId: decoded.user_id})){
                        next();
                    } else {
                        throw error;
                    }
                }catch(e){
                    res.send(e);
                }
                
            }
        });
    } else {
        res.send({
            mensaje: 'Token no proveída.'
        });
    }

}

module.exports = { tokenValidationAdmin };
