const router = require('express').Router();
const loginResource = require('../resources/authResouces/loginResources');
const registerResource = require('../resources/authResouces/registerResources');

/**
* @swagger
* tags:
*   name: auth
*   description: User authorization
*/
 
/**
* @swagger
*
* /auth/login:
*   post:
*     summary: The users need to login in order to get a valid token
*     tags: [auth]
*     description: Login to the application
*     produces:
*       - application/json
*     parameters:
*       - name: email
*         description: email to use for login.
*         in: formData
*         required: true
*         type: string
*       - name: password
*         description: User's password.
*         in: formData
*         required: true
*         type: string
*     responses:
*       200:
*         description: login
*/

/**
* @swagger
*
* /auth/register:
*   post:
*     summary: The users need to register to acces to the app
*     tags: [auth]
*     description: register to the application
*     produces:
*       - application/json
*     parameters:
*       - name: firstName
*         description: firstName of the user.
*         in: formData
*         required: true
*         type: string
*       - name: lastName
*         description: lastName of the user.
*         in: formData
*         required: true
*         type: string
*       - name: email
*         description: email to use for login.
*         in: formData
*         required: true
*         type: string
*       - name: password
*         description: User's password.
*         in: formData
*         required: true
*         type: string
*     responses:
*       200:
*         description: register
*/

router.post('/login', loginResource);
router.post('/register',registerResource);

module.exports = router;
