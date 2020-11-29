const db = require('../config/db');

async function addPacient (newPacient){
    try {
        const query = `INSERT INTO public.pacient ("pacient_firstname", "pacient_lastname", "pacient_dni", pacient_birthday, pacient_age, pacient_mail, pacient_ensurance, pacient_cellphone_number)
                        VALUES ($(firstName), $(lastName), $(DNI), $(birthday_date), $(age), $(email), $(ensurance), $(cell_phone))`; 
        return await db.none(query, newPacient);
    } catch(e){
        return e;
    }
}

async function getPacientsList (){
    try{
        const query = `SELECT pacient."pacient_firstname", pacient."pacient_lastname", pacient."pacient_dni", pacient."pacient_birthday", pacient."pacient_age", pacient."pacient_mail", pacient."pacient_ensurance", pacient."pacient_cellphone_number"
        FROM public.pacient`;
        const select = await db.query(query);
        return select;
    } catch(e){
        return e;
    }
    
}
//recibe prestacion y dia
async function getPacientsListPrestation (data){
    try {
        const query = `SELECT pacient.pacient_firstname, pacient.pacient_lastname, pacient.pacient_mail, procedure_.name, procedure_.procedure_description FROM "pacient"
                JOIN "appointment"
                ON (pacient.idpacient = appointment."FK_idpacient")
				JOIN procedure_
				ON ("appointment"."FK_idprocedure" = procedure_.idprocedure)
                WHERE (appointment.appointment_date = $(day) AND appointment."FK_idprestacion" = $(procedure))`;
        const select = await db.query(query, data);
        return select;
    } catch(e) {
        return e;
    }
    
}

async function addPacientClinicalRecord (clinicalRecord){
    try {
        const query = `INSERT INTO "clinical_record" ("FK_idpacient", "FK_appointment_id", "clinical_record_observation", "clinical_record_date")
                        VALUES ($(FK_idpacient), $(FK_appointment_id), $(clinical_record_observation), $(clinical_record_date))`; 
        await db.none(query, clinicalRecord);
        return "success"
    } catch(e){
        return e;
    }
}

module.exports = {
    addPacient,
    getPacientsList,
    getPacientsListPrestation,
    addPacientClinicalRecord,
};