const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const {dbConnection} = require('./database/database');

const Port = process.env.PORT;

//Base de Datos
dbConnection();

//Initializations
const app = express();

//Settings
app.set('port', Port || 4000);
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Global Variables

//Routes
app.get('/', (req, res) => {
	res.send('Hello World');
});
app.use('/api/usuarios', require('./routes/usuariosRouters'));
app.use('/api/roles', require('./routes/rolesRouters'));
app.use('/api/productos', require('./routes/productos'));
app.use('/api/categorias', require('./routes/categorias'));
app.use('/api/unidades', require('./routes/unidades'));
app.use('/api/ventas', require('./routes/ventasRouters'));
app.use('/api/google', require('./routes/loginRouters'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
