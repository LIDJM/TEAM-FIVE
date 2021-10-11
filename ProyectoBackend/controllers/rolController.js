const {response} = require('express');
const Rol = require('../models/rolModels');

const getRoles = async (req, resp = response) => {
	const roles = await Rol.find();

	resp.json({
		estatus: true,
		msg: 'Lista de roles',
		roles,
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

const upgradeRol = async (req, resp = response) => {
	const id = req.params.id;
	try {
		let rolActualizar = await Rol.findById(id);
		if (!rolActualizar) {
			return resp.status(400).json({
				estatus: false,
				msg: 'El rol no existe',
			});
		}
		const {nombre} = req.body;

		rolActualizar = {nombre};
		await Rol.findByIdAndUpdate(id, rolActualizar);

		return resp.status(201).json({
			msg: 'rol actualizado',
			uid: rolActualizar.id,
			name: rolActualizar.nombre,
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			estatus: false,
			msg: 'Error al actualizar rol',
		});
	}
};

const deleteRol = async (req, resp = response) => {
	const id = req.params.id;

	try {
		let rolEliminar = await Rol.findById(id);

		if (!rolEliminar) {
			return resp.status(400).json({
				estatus: false,
				msg: 'No existe un rol con ese id',
			});
		}

		await Rol.findByIdAndDelete(id);
		return resp.status(201).json({
			msg: 'Rol Eliminado',
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			estatus: false,
			msg: 'Error al Eliminar rol',
		});
	}
};

module.exports = {
	getRoles,
	setRol,
	upgradeRol,
	deleteRol,
};
