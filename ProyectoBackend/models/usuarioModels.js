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
		default: 'no asignado',
	},
	estado: {
		type: Schema.Types.ObjectId,
		ref: 'estado',
		default: '6170e65fdb034b5294554d01',
	},
	idToken: {
		type: String,
	},
});

module.exports = model('Usuario', UsuarioSchema);
