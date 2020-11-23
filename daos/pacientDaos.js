const db = require('../config/db');

async function addPacient (newPacient){
    let query = `INSERT INTO "pacient" ("pacient_firstName", "pacient_lastName", "pacient_DNI", "pacient_birthdaydate", "pacient_age", "pacient_mail", "pacient_ensurance", "pacient_phone", "pacient_password")
                        VALUES ($(user_id), $(firstName), $(lastName), $(DNI), $(birthday_date), $(age), $(email), $(ensurance), $(cell_phone), $(password))`; 
    
    return await db.none(query, newPacient);
}

async function getPacientsList (){
    let query = `SELECT * FROM "pacient"`;
    let select = await db.query(query);
    return select;
}
//recibe prestacion y dia
async function getPacientsListPrestation (data){
    let query = `SELECT * FROM "pacient"
                JOIN appointment
                ON (pacient.id = "appointment.FK_idpacient")
                WHERE (appointment.appointment_date = $(dia) AND "appointment.FK_idprestacion" = $(prestacion))`;
    let select = await db.query(query, data);
    return select;
}

async function addPacientClinicalRecord (clinicalRecord){
    let query = `INSERT INTO "clinical_record" ("FK_idpacient", "FK_appointment_id", "clinical_record_observation", "clinical_record_date")
                        VALUES ($(FK_idpacient), $(FK_appointment_id), $(clinical_record_observation), $(clinical_record_date))`; 
    
    return await db.none(query, clinicalRecord);
}

module.exports = {
    addPacient,
    getPacientsList,
    getPacientsListPrestation,
    addPacientClinicalRecord,
};