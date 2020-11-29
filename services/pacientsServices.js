'strict mode';

const pacientsDaos = require('../daos/pacientDaos');

async function addPacient(req){
    let newPacient = {
        firstName: req.firstName,
        lastName: req.lastName,
        DNI: req.DNI,
        birthday_date: req.birthday_date,
        age: req.age,
        email: req.email,
        ensurance: req.ensurance,
        cell_phone: req.cell_phone
    }   
    await pacientsDaos.addPacient(newPacient);
}

async function getPacientsList(){
    
    try{
        let response = await pacientsDaos.getPacientsList();
        return {
            code: 200,
            data: response,
            valid: true
        }; 
    }catch(error){
        return {
            code: 404,
            message : error.message,
            valid: false
        };
    }
}

async function getPacientsListForDayAndProcedure(day, procedure){
    const data = {
        day: day,
        procedure: procedure
    }
    try{
        let response = await pacientsDaos.getPacientsListPrestation(data);
        return {
            code: 200,
            data: response,
            valid: true
        };
    }catch(error){
        return {
            code: 404,
            message : error.message,
            valid: false
        };
    }
}

//armo el objeto clinical record para enviarlo al daos
async function addPacientClinicalRecord(req){
    let newPacientClinicalRecord = {
        FK_idpacient: req.pacientId,
        FK_appointment_id: req.appointmentId,
        clinical_record_observation: req.clinicalRecordObservation,
        clinical_record_date: req.clinicalRecordDate
    }   
    await pacientsDaos.addPacientClinicalRecord(newPacientClinicalRecord);
}

module.exports = {
    addPacient,
    getPacientsList,
    getPacientsListForDayAndProcedure,
    addPacientClinicalRecord,
};