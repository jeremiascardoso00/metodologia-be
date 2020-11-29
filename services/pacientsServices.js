'strict mode';

const pacientsDaos = require('../daos/pacientDaos');

async function addPacient(newPacient){ 
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
async function addPacientClinicalRecord(newPacientClinicalRecord){
    return await pacientsDaos.addPacientClinicalRecord(newPacientClinicalRecord);
}

module.exports = {
    addPacient,
    getPacientsList,
    getPacientsListForDayAndProcedure,
    addPacientClinicalRecord,
};