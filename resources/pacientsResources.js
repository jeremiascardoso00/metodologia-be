const pacientsServices = require('../../services/pacientsServices');

const addPacient = async (req,res )=> {
    try {
        await pacientsServices.addPacient({firstName: req.body.firstName, lastName: req.body.lastName, DNI: req.body.DNI, birthday_date: req.body.birthday_date, age: req.body.age, email: req.body.email, ensurance: req.body.ensurance, cell_phone: req.body.cell_phone, password: psw});
        res.json(registedUser.message).status(registedUser.code);
    }
    catch(e){
        res.json(e);
    }
}

const getPacientsList = async (req, res)=> {
    let pacientsList = await pacientsService.getPacientsList();
    res.json(pacientsList);
    res.status(pacientsList.code);
    res.end();  
}

const getPacientsListForDayAndProcedure = async (req, res)=> {
    let pacientsList = await pacientsService.getPacientsListForDayAndProcedure(req.body.day, req.body.procedureID );
    res.json(pacientsList);
    res.status(pacientsList.code);
    res.end();  
}

const addPacientClinicalRecord = async (req, res) => {
    try {
        await pacientsServices.addPacientClinicalRecord({firstName: req.body.firstName, lastName: req.body.lastName, DNI: req.body.DNI, birthday_date: req.body.birthday_date, age: req.body.age, email: req.body.email, ensurance: req.body.ensurance, cell_phone: req.body.cell_phone, password: psw});
        res.json(registedUser.message).status(registedUser.code);
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