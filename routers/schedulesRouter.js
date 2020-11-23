const router = require('express').Router();
const schedulesResource = require('../resources/schedulesResources');

//cambiar services por resources

/**
* @swagger
* tags:
*   name: schedules
*   description: User schedules
*/

/**
* @swagger
*
* /schedules/:
*   get:
*     summary: The user can see his schedules
*     tags: [schedules]
*     description: Request user schedules
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         description: if to use for show the schedules.
*         in: formData
*         required: true
*         type: string
*     responses:
*       200:
*         description: getSchedules
*/

/**
* @swagger
*
* /schedules/:
*   post:
*     summary: The users have the possibility to schedule visits to the museum
*     tags: [schedules]
*     description: schedule a visit
*     produces:
*       - application/json
*     parameters:
*       - name: user_id
*         description: id of the user.
*         in: formData
*         required: true
*         type: uuid
*       - name: exhibicion_id
*         description: museum exhibit chosen by user.
*         in: formData
*         required: true
*         type: int
*       - name: date
*         description: date of the visit.
*         in: formData
*         required: true
*         type: date
*       - name: hour
*         description: hour of the visit.
*         in: formData
*         required: true
*         type: time
*     responses:
*       200:
*         description: postSchedule
*/

const tokenValidation = require('../filters/tokenValidation');

router.use(tokenValidation.tokenValidation);

router.post('/', schedulesResource.postNew);

//terminar lo de abajo
router.delete('/', schedulesResource.deleteSchedule);

module.exports = router;
