const db = require('../config/db');

/* agendar turno*/
async function addSchedule (newAppointment){//cambiar de acuerdo a nuestra nueva db
    let query = `INSERT INTO "appointment" ("appointment_date", "appointment_hour", "FK_idpacient", "FK_idprocedure", "FK_idprestacion")
                            VALUES ($(appointment_date), $(appointment_hour), $(FK_idpacient), $(FK_idprocedure), $(FK_idprestacion))`; 
    return await db.none(query, newAppointment);
}

async function findDateAndHour(respuesta){
    //esto es para pedir informacion reelevante para el usuario
    let query = `SELECT * FROM "appointment"
                WHERE (appointment_date = $(respuesta.date) AND appointment_hour = $(respuesta.hour))
                `;
    let select = await db.manyOrNone(query, respuesta);
    return select;
}


//probar
async function deleteSchedule(respuesta){
    let query = `DELETE FROM "bookings" WHERE "booking_id" = $(booking_id)`;
    await db.none(query, respuesta);
    return "Informacion borrada correctamente.";//cambiar de acuerdo a nuestra nueva db
}

module.exports = {
    addSchedule,
    findDateAndHour,
    deleteSchedule,
};