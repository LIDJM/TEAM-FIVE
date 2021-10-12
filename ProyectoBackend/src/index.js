// llamamos el paquete de express
const express = require('express');

// añadimos la configuracion de la variable de entorno
require('dotenv').config();
const {dbConnection} = require('../database/config');
//const cors = require('cors');

const Port = process.env.Port;

/** Crear Servidor Express */
const app = express();

/** Base de datos */
dbConnection();

/**Utilizar CORS */
//app.use(cors());

/**Directorio publico */
/** el use es un middleware: funcion que se ejecuta siempre que  alguien hace una peticion a mi servidor*/
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/usuarios', require('../routers/usuariosRouters'));
app.use('/api/roles', require('../routers/rolesRouters'));
app.use('/api/productos', require('../routers/productos'));
app.use('/api/categorias', require('../routers/categorias'));
app.use('/api/unidades', require('../routers/unidades'));

/** Escuchar las peticiones */
app.listen(Port, () => {
	console.log(`Server on ${Port}`);
});
