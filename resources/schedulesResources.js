const router = require('express').Router();
const schedulesService = require('../services/schedulesServices');

const validateData = require('../utils/validateData');


const postNew = async (req, res) => {

    //if(!await validateData(req.body, 'simpleScheduleValidationData')) res.end("Datos ingresados erroneos");

    try {
        
        const resp = await schedulesService.addSchedule(req);
        res.json({
            code: 200,
            message: resp.message,
            user: req.body.email,
            valid: true
        });
    }catch (error) {
        res.json({
            code: 404,
            message: error,
            valid: false
        });
    }
}

const deleteSchedule = async (req)=> {
    
    //pide el id para eliminar
    let schedulesDelete = await schedulesService.deleteSchedule({booking_id: req.body.booking_id});
    res.json(schedulesDelete); 
}


module.exports = {
    postNew,
    deleteSchedule
};