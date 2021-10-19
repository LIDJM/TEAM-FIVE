const {response} = require('express');
const Ventas = require('../models/ventasModels');
const Rol = require('../models/rolModels');
const Cliente = require('../models/clienteModels');
const Producto = require('../models/Producto');
const Usuario = require('../models/usuarioModels');
const Unidad = require('../models/UnidadModel');

const getVentas = async (req, resp = response) => {

    const ventas = await Ventas
    .find()
    .populate('vendedor')
    .populate('cliente')
    .populate('producto');
    //const ventas = await Ventas.find();
    
    resp.json({
        ok: true,
        msg: 'listar ventas',
        ventas,
    });
}

const setVentas = async (req, resp = response) => {

    const venta = new Ventas(req.body);
    
    try{
        const ven = await venta.save();
        
        resp.status(201).json({
            ok: true,
            msg: 'venta creada',
            ven,
        });

    }catch (error){
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al registrar la venta'
        })
    }

    resp.json({
        ok: true,
        msg: 'Registrar venta'
    });
}

const actualizarVenta = async (req, resp = response) => {
	const id = req.params.id;
	try {
		let ventaActualizar = await Ventas.findById(id);
		if (!ventaActualizar) {
			return resp.status(400).json({
				estatus: false,
				msg: 'La venta no existe',
			});
		}
		const {vendedor,
            cliente, 
            producto, 
            cantidad, 
            precio_venta_total,
         } = req.body;

		ventaActualizar = {vendedor,
            cliente, 
            producto,
            cantidad, 
            precio_venta_total,
            };

		await Ventas.findByIdAndUpdate(id, ventaActualizar);

		return resp.status(201).json({
			msg: 'venta actualizada',
            vendedor: ventaActualizar.vendedor,
			cliente: ventaActualizar.cliente, 
            prd: ventaActualizar.producto, 
            qty: ventaActualizar.cantidad, 
            pvt: ventaActualizar.precio_venta_total,
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			estatus: false,
			msg: 'Error al actualizar venta',
		});
	}}

const eliminarVenta= async (req, resp = response) => {
    const id = req.params.id;

	try {
		let VentaEliminar = await Ventas.findById(id);

		if (!VentaEliminar) {
			return resp.status(400).json({
				estatus: false,
				msg: 'No existe una venta con ese id',
			});
		}

		await Ventas.findByIdAndDelete(id);
		return resp.status(201).json({
			msg: 'Venta Eliminada',
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			estatus: false,
			msg: 'Error al Eliminar venta',
		});
	}
}

module.exports = {
    getVentas,
    setVentas,
    actualizarVenta,
    eliminarVenta    
}