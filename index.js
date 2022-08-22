const express = require('express');
require('dotenv').config();
const {dbConnection} = require('./database/config')
const cors = require('cors');
//Crear el servidor de express 

const app = express();

//Base de Datos 

dbConnection();


// CORS

const corsOptions = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

//Directorio Publico

app.use(express.static('public'));

//LEctura y Parseo del Body 
app.use(express.json());

//Rutas

//Todo:auth //crear,login,renew
app.use('/api/auth', require('./routes/auth'));
// Todo:CRUD:Eventos
app.use('/api/events', require('./routes/events'));



//Escuchar peticiones 
app.listen(process.env.PORT, ()=> {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});