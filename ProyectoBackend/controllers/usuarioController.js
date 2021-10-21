//esto es para activar las ayudas
const {response} = require('express');
const Usuario = require('../models/usuarioModels');

const getUsuarios = async (req, resp = response) => {
	const usuarios = await Usuario.find().populate('estado');

	resp.json(usuarios);
};

const newUsuario = async (req, resp = response) => {
	const {email} = req.body;

	try {
		let usuario = await Usuario.findOne({email});

		if (usuario) {
			return resp.status(400).json({
				estatus: false,
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
			estatus: false,
			msg: 'Error al crear nuevo usuario',
		});
	}
};

const upgradeUsuario = async (req, resp = response) => {
	const id = req.params.id;
	try {
		let usuarioActualizar = await Usuario.findById(id);
		if (!usuarioActualizar) {
			return resp.status(400).json({
				estatus: false,
				msg: 'El usuario no existe',
			});
		}
		const {password, cedula, nombre, email, estado} = req.body;

		usuarioActualizar = {password, cedula, nombre, email, estado};
		await Usuario.findByIdAndUpdate(id, usuarioActualizar);

		return resp.status(201).json({
			msg: 'Usuario actualizado',
			uid: usuarioActualizar.id,
			name: usuarioActualizar.nombre,
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			estatus: false,
			msg: 'Error al actualizar usuario',
		});
	}
};

const deleteUsuario = async (req, resp = response) => {
	const id = req.params.id;

	try {
		let UsuarioEliminar = await Usuario.findById(id);

		if (!UsuarioEliminar) {
			return resp.status(400).json({
				estatus: false,
				msg: 'No existe un usuario con ese id',
			});
		}

		await Usuario.findByIdAndDelete(id);
		return resp.status(201).json({
			msg: 'Usuario Eliminado',
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			estatus: false,
			msg: 'Error al Eliminar usuario',
		});
	}
};

const setUsuario = async (req, resp = response) => {
	const {cedula} = req.body;
	const usuario = await Usuario.findOne({cedula}).populate('rol');

	resp.json({
		estatus: true,
		msg: 'usuario',
		usuario,
	});
};
module.exports = {
	getUsuarios,
	newUsuario,
	upgradeUsuario,
	deleteUsuario,
	setUsuario,
};
