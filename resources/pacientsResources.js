const pacientsServices = require('../services/pacientsServices');

const addPacient = async (req,res )=> {
    try {
        await pacientsServices.addPacient({firstName: req.body.pacient_firstName, lastName: req.body.pacient_lastName, DNI: req.body.pacient_DNI, birthday_date: req.body.pacient_birthday, age: req.body.pacient_age, email: req.body.pacient_mail, ensurance: req.body.pacient_ensurance, cell_phone: req.body.pacient_cellphone_number});
        res.json({message: "success",
                  code: 200});
    }
    catch(e){
        res.json(e);
    }
}

const getPacientsList = async (req, res)=> {
    try {
        const pacientsList = await pacientsServices.getPacientsList();
        res.json(pacientsList.data);
        res.status(pacientsList.code);
        res.end();  
    } catch(e){
        res.json(e);
    }
}

const getPacientsListForDayAndProcedure = async (req, res)=> {
    let pacientsList = await pacientsServices.getPacientsListForDayAndProcedure(req.body.day, req.body.procedureID );
    res.json(pacientsList.data);
    res.status(pacientsList.code);
    res.end();  
}

const addPacientClinicalRecord = async (req, res) => {
    try {
        const result = await pacientsServices.addPacientClinicalRecord({FK_idpacient: req.body.FK_idpacient, FK_appointment_id: req.body.FK_appointment_id, clinical_record_observation: req.body.clinical_record_observation, clinical_record_date: req.body.clinical_record_date});
        res.json(result);
        res.status(200);
        res.end();  
    }
    catch(e){
        res.json(e);
    }
}

module.exports = {
    addPacient,
    getPacientsList,
    getPacientsListForDayAndProcedure,
    addPacientClinicalRecord,
};