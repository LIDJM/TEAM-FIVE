<<<<<<< HEAD
const mongoose = require('mongoose');

const BD = process.env.Db_Connection;

const dbConnection = async () => {
	try {
		await mongoose.connect(BD);
		console.log('DB online');
	} catch (error) {
		console.log(error);
		throw new Error('Error al inicializar DB');
	}
};

module.exports = {
	dbConnection,
};
=======
const { Console } = require('console');
const mongoose = require('mongoose');
require('dotenv').config();

const BD = process.env.Db_Connection;

const dbConnection = async () => {
    try{
        await mongoose.connect(BD);
        console.log('Db online');
    } catch (error){
        console.log(error);
        throw new Error('Error al inicializar DB')
    }
    
};

module.exports = {
    dbConnection,
}
>>>>>>> 28bb9de (CRUD Productos -> Crear Producto)
