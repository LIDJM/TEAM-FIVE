<<<<<<< HEAD
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
=======
>>>>>>> 28bb9deb2ea5f29e9e636f2189505cf8a64d72c4
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
<<<<<<< HEAD
}
>>>>>>> 28bb9de (CRUD Productos -> Crear Producto)
=======
}
>>>>>>> 28bb9deb2ea5f29e9e636f2189505cf8a64d72c4
