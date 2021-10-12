const {response} = require('express');
const Ventas = require('../models/ventasModels');


const getVentas = async (req, resp = response) => {

    const ventas = await Ventas.find().populate('vendedor', 'cliente');
    //const ventas = await Ventas.find();

    resp.json({
        ok: true,
        msg: 'listar ventas',
        ventas
    });
}

const setVentas = async (req, resp = response) => {

    //const id = req.params._id;
    const venta = new Ventas(req.body);
    try{
        //let venta = await Ventas.findById({id});
    
		//if (venta) {
		//	return resp.status(400).json({
		//		estatus: false,
		//		msg: 'Ya existe una venta registrada con este id',
        //        venta
		//	});
		//}

        const ven = await venta.save();

        resp.status(201).json({
            ok: true,
            msg: 'venta creada',
            vendedor: ven.vendedor,
            cliente: ven.cliente,
            descr: ven.descripcion_item, 
            qty: ven.cantidad, 
            um: ven.unidad_medida, 
            pu: ven.precio_unitario,
            pvt: ven.precio_venta_total,
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
            descripcion_item, 
            cantidad, 
            unidad_medida, 
            precio_unitario,
            precio_venta_total,
         } = req.body;

		ventaActualizar = {vendedor,
            cliente, 
            descripcion_item, 
            cantidad, 
            unidad_medida, 
            precio_unitario,
            precio_venta_total,
            };

		await Ventas.findByIdAndUpdate(id, ventaActualizar);

		return resp.status(201).json({
			msg: 'venta actualizada',
            vendedor: ventaActualizar.vendedor,
			cliente: ventaActualizar.cliente, 
            descr: ventaActualizar.descripcion_item, 
            qty: ventaActualizar.cantidad, 
            um: ventaActualizar.unidad_medida, 
            pu: ventaActualizar.precio_unitario,
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