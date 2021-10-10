const {response} = require('express');
const Rol = require('../models/rolModels');

const getRoles = (req, resp = response) => {
	resp.json({
		estatus: true,
		msg: 'Lista de Roles',
	});
};

const setRol = async (req, resp = response) => {
	const {nombre} = req.body;
	try {
		let rol = await Rol.findOne({nombre});
		if (rol) {
			return resp.status(400).json({
				ok: false,
				msg: 'ya existe ese rol',
			});
		}

		rol = new Rol(req.body);

		await rol.save();

		resp.status(201).json({
			estatus: true,
			msg: 'Rol nuevo',
			uid: rol.id,
			name: rol.name,
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			ok: false,
			msg: 'Error al crear nuevo rol',
		});
	}
};

const upgradeRol = (req, resp = response) => {
	resp.json({
		estatus: true,
		msg: 'Rol Actualizado',
	});
};

const deleteRol = (req, resp = response) => {
	resp.json({
		estatus: true,
		msg: 'Rol Eliminado',
	});
};

module.exports = {
	getRoles,
	setRol,
	upgradeRol,
	deleteRol,
};
