const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
	password: {
		type: String,
		required: true,
	},
	cedula: {
		type: String,
		required: true,
		unique: true,
	},
	nombre: {
		type: String,
		required: true,
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
		type: Boolean,
		required: true,
	},
});

module.exports = model('Usuario', UsuarioSchema);
