'strict mode';

const schedulesDaos = require('../daos/schedulesDaos');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const regexUuid = require('../utils/regex').regexUUIDv4;


async function addSchedule (req){

     
    //revisa si la fecha y hora no se encuentra ocupada
    const result = await schedulesDaos.findDateAndHour({date: req.body.date, hour: req.body.hour});
    if (result) {
        return {message: "Turno ocupado"};
    } else {
        try{
            let newAppointment = {
                appointment_date: req.body.date,
                appointment_hour: req.body.hour,
                FK_idpacient: req.body.idpacient,
                FK_idprocedure: req.body.idprocedure,
                FK_idprestacion: req.body.idprestacion
            }
            await schedulesDaos.addSchedule(newAppointment);
            return{message: "Formulario recibido."};
        }
        catch(error){
            return error;
        }
    }
    

    
}


async function deleteSchedule(scheduleInfo){

    try{
        let response = await schedulesDaos.deleteSchedule(scheduleInfo);
        return {
            code: 200,
            message : response,
            valid: true
        };
        
    }catch(error){
        return {
            code: 404,
            message : error.message,
            valid: false
        }
    }
}

//validar id
function validarUuid(uuid){
    let bolean = regexUuid.test(uuid);
    return bolean;
}

//agregar delete, get y update schedules
module.exports = {
    addSchedule,
    deleteSchedule,
};