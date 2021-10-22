const {Schema, model} = require('mongoose');

const EstadoUsuarioSchema = Schema({
	nombre: {
		type: String,
		required: true,
	},
});

module.exports = model('estado', EstadoUsuarioSchema);
