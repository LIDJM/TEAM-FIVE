const {response} = require('express');
const Categoria = require('../models/Categoria');


const getCategorias = async (req, resp = response) => {
	const categories = await Categoria.find();            

	resp.json({
		estatus: true,
		msg: 'Lista de Categorias',
		categories,
	});
};

const setCategoria = async (req, resp = response) => {
	const {nombre} = req.body;
	try {
		let categoria = await Categoria.findOne({nombre});
		if (categoria) {
			return resp.status(400).json({
				ok: false,
				msg: 'Ya existe esa categoría',
			});
		}

		categoria = new Categoria(req.body);

		await categoria.save();

		resp.status(201).json({
			estatus: true,
			msg: 'Categoría nueva',
			uid: categoria.id,
			name: categoria.name,
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			ok: false,
			msg: 'Error al crear nueva categoría',
		});
	}
};

const actualizarCategoria = async (req, resp = response) => {
	const id = req.params.id;
	try {
		let categoriaActualizar = await Categoria.findById(id);
		if (!categoriaActualizar) {
			return resp.status(400).json({
				estatus: false,
				msg: 'La categoría no existe',
			});
		}
		const {nombre} = req.body;

		categoriaActualizar = {nombre};
		await Categoria.findByIdAndUpdate(id, categoriaActualizar);

		return resp.status(201).json({
			msg: 'Categoria actualizada',
			uid: categoriaActualizar.id,
			name: categoriaActualizar.nombre,
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			estatus: false,
			msg: 'Error al actualizar la categoría',
		});
	}
};

const eliminarCategoria = async (req, resp = response) => {
	const id = req.params.id;

	try {
		let categoriaEliminar = await Categoria.findById(id);

		if (!categoriaEliminar) {
			return resp.status(400).json({
				estatus: false,
				msg: 'No existe una categoría con ese id',
			});
		}

		await Categoria.findByIdAndDelete(id);
		return resp.status(201).json({
			msg: 'Categoría Eliminada',
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			estatus: false,
			msg: 'Error al eliminar la categoría',
		});
	}
};

module.exports = {
	getCategorias,
	setCategoria,
	actualizarCategoria,
	eliminarCategoria,
};
