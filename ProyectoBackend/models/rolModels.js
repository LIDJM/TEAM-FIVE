const {Schema, model} = require('mongoose');

const RolSchema = Schema(
	{
		nombre: {
			type: String,
			required: true,
		},
	},
	{
		collection: 'Roles',
	},
);

module.exports = model('Rol', RolSchema);
