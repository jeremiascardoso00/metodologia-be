
const api = require('express')();

const pacientsRouter = require('./routers/pacientsRouter');
const schedulesRouter = require('./routers/schedulesRouter');
const authRouter = require('./routers/authRouter');

api.use('/pacients', pacientsRouter);

api.use('/schedules', schedulesRouter);

api.use('/auth', authRouter);

//agregar historia clinica
//api.use('/clinic-history', clinicHistoryRouter);

module.exports = {
    api_v1 : api
};

/*
Listado de pacientes *
- Listado de pacientes a atender por día indicando prestación a realizar. *
- El paciente puede seleccionar el turno (día y horario) desde la página. La Dra. atiende a la mañana de 8.00
a 12.00 y a la tarde de 16.00 hs a 19.00 hs. Cada turno tiene una duración de 1 hora. *
- Cuando la doctora recibe el mail del paciente, agrega la prestación a realizar. 
- Historia Clínica del paciente. Actualmente guarda la información en una ficha que tiene el siguiente
formato:
*/