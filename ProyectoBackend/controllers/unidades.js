const {response} = require('express');
const Unidad = require('../models/UnidadModel');


const getUnidades = async (req, resp = response) => {
	const unidades = await Unidad.find();            

	resp.json({
		estatus: true,
		msg: 'Lista de Categorias',
		unidades,
	});
};

const setUnidad = async (req, resp = response) => {
	const {nombre} = req.body;
	try {
		let unidad = await Unidad.findOne({nombre});
		if (unidad) {
			return resp.status(400).json({
				ok: false,
				msg: 'Ya existe esa Unidad de Medida',
			});
		}

		unidad = new Unidad(req.body);

		await unidad.save();

		resp.status(201).json({
			estatus: true,
			msg: 'Unidad de medida nueva',
			uid: unidad.id,
			name: unidad.name,
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			ok: false,
			msg: 'Error al crear nueva Unidad de medida',
		});
	}
};

const actualizarUnidad = async (req, resp = response) => {
	const id = req.params.id;
	try {
		let unidadActualizar = await Unidad.findById(id);
		if (!unidadActualizar) {
			return resp.status(400).json({
				estatus: false,
				msg: 'La Unidad de medida no existe',
			});
		}
		const {nombre} = req.body;

		unidadActualizar = {nombre};
		await Unidad.findByIdAndUpdate(id, unidadActualizar);

		return resp.status(201).json({
			msg: 'Categoria actualizada',
			uid: unidadActualizar.id,
			name: unidadActualizar.nombre,
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			estatus: false,
			msg: 'Error al actualizar la Unidad de medida',
		});
	}
};

const eliminarUnidad = async (req, resp = response) => {
	const id = req.params.id;

	try {
		let unidadEliminar = await Unidad.findById(id);

		if (!unidadEliminar) {
			return resp.status(400).json({
				estatus: false,
				msg: 'No existe una unidad de medida con ese id',
			});
		}

		await Unidad.findByIdAndDelete(id);
		return resp.status(201).json({
			msg: 'Unidad de medida Eliminada',
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			estatus: false,
			msg: 'Error al eliminar la Unida de medida',
		});
	}
};

module.exports = {
	getUnidades,
	setUnidad,
	actualizarUnidad,
	eliminarUnidad,
};
