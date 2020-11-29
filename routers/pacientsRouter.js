const router = require('express').Router();

const tokenValidationAdmin = require('../filters/tokenValidationAdmin');
const pacientsResource = require('../resources/pacientsResources');

router.use(tokenValidationAdmin.tokenValidationAdmin);
router.post('/add', pacientsResource.addPacient);

router.get('/getPacients', pacientsResource.getPacientsList);

router.get('/getPacients-day', pacientsResource.getPacientsListForDayAndProcedure);

router.post('/add-clinical-record', pacientsResource.addPacientClinicalRecord);


module.exports = router;
