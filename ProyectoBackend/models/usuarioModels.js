const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
	password: {
		type: String,
		required: true,
	},
	cedula: {
		type: String,
		unique: true,
	},
	nombre: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	rol: {
		type: String,
		required: true,
	},
	estado: {
		type: Schema.Types.ObjectId,
		ref: 'estado',
	},
});

module.exports = model('Usuario', UsuarioSchema);
