//cargo las variables del entorno
require('./loadenv')();

const express = require('express');
const api = require('./api');
const app = express();
const cors = require('cors');




const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const tv4 = require('tv4');



const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');


let jsonParser = bodyParser.json();

app.use(jsonParser);



//basicamente le decimos que si la variable PORT esta definida
//usemos esa, y si no, usemos el puerto 3000.
//enviroment variable: PORT
const port = process.env.APP_PORT;

/*para crear una enviroment variable en windows se escribe en la
consola, set (nombreDeLaVariable)=(numeroPuerto) */


const options = {
  openapi: "3.0.0",
  definition: {
    info: {
      title: 'Internship Testing', // Title (required)
      version: '1.0.0', // Version (required)
    },
  },
  // Path to the API docs
  apis: ['./routers/**.js']
 };

//Initialize swagger-jsdoc -> returns validated swagger spec in json format
 

const swaggerSpec = swaggerJSDoc(options);

//habilitar el cors para ciertos recursos
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {explorer: true}));

app.use('/api', api.api_v1);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});