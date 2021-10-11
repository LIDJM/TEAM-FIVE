const express = require('express');
require('dotenv').config();
const {dbConnection} = require('../database/config');

const Port = process.env.Port;

const app = express();

// Base de Datos

dbConnection();

app.use(express.static('public'));

app.use(express.json());

// Rutas

app.use('/api/productos', require('../routers/productos'));


// Levantar servidor

app.listen(Port, () => {
    console.log(`Server on ${Port}`);
})