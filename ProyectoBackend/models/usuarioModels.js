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
		type: Schema.Types.ObjectId,
		ref: 'Rol',
	},
	estado: {
		type: String,
		required: true,
		default: 'pendiente',
	},
});

module.exports = model('Usuario', UsuarioSchema);
