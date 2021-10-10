//esto es para activar las ayudas
const {response} = require('express');
const Usuario = require('../models/usuarioModels');

const getUsuarios = async (req, resp = response) => {
	const usuarios = await Usuario.find();

	resp.json({
		estatus: true,
		msg: 'Lista de usuarios',
		usuarios,
	});
};

const setUsuario = async (req, resp = response) => {
	const {email} = req.body;

	try {
		let usuario = await Usuario.findOne({email});

		if (usuario) {
			return resp.status(400).json({
				ok: false,
				msg: 'Ya existe un usuario registrado con este email',
			});
		}

		usuario = new Usuario(req.body);

		await usuario.save();

		resp.status(201).json({
			estatus: true,
			msg: 'Usuario Nuevo',
			uid: usuario.id,
			name: usuario.nombre,
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			ok: false,
			msg: 'Error al crear nuevo usuario',
		});
	}
};

const upgradeUsuario = (req, resp = response) => {
	resp.json({
		estatus: true,
		msg: 'Usuario Actualizado',
	});
};

const deleteUsuario = (req, resp = response) => {
	resp.json({
		estatus: true,
		msg: 'Usuario Eliminado',
	});
};

module.exports = {
	getUsuarios,
	setUsuario,
	upgradeUsuario,
	deleteUsuario,
};
