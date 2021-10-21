const { response } = require('express');
const Ventas = require('../models/ventasModels');
const Rol = require('../models/rolModels');
const Cliente = require('../models/clienteModels');
const Producto = require('../models/Producto');
const Usuario = require('../models/usuarioModels');
const Unidad = require('../models/UnidadModel');

const getVentas = async (req, resp = response) => {

    const ventas = await Ventas
        .find()
        .populate('vendedor', '_id nombre')
        .populate('cliente', 'nombre')
        .populate('producto', 'codigo descripcion precio_venta unidad');

    resp.json({
        ok: true,
        msg: 'listar ventas',
        ventas,
    });
};

const setVentas = async (req, resp = response) => {

    const venta = new Ventas(req.body);
    const id_producto = req.params.producto;
    const id_cliente = req.params.cliente;
    const id_vendedor = req.params.vendedor;
    
    try {
        let producto = await Producto.findById(id_producto);
        if (!producto) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe el producto que se quiere vender',
            });
        }
        let cliente = await Cliente.findById(id_cliente);
        if (!cliente) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe el cliente al que se le quiere vender',
            });
        }
        let vendedor = await Usuario.findById(id_vendedor);
        if (!vendedor) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe el vendedor. Revisar su registro',
            });
        }
        const ven = await venta.save();

        resp.status(201).json({
            ok: true,
            msg: 'venta creada',
            ven,
        });

    } catch (error) {
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
};

const actualizarVenta = async (req, resp = response) => {
    const id = req.params.id;
    const id_producto = req.params.producto;
    const id_cliente = req.params.cliente;
    const id_vendedor = req.params.vendedor;
    
    try {
        let ventaActualizar = await Ventas.findById(id);
        if (!ventaActualizar) {
            return resp.status(400).json({
                estatus: false,
                msg: 'La venta no existe',
            });
        }
        
        let producto = await Producto.findById(id_producto);
        if (!producto) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe el producto que se quiere vender',
            });
        }
        let cliente = await Cliente.findById(id_cliente);
        if (!cliente) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe el cliente al que se le quiere vender',
            });
        }
        let vendedor = await Usuario.findById(id_vendedor);
        if (!vendedor) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe el vendedor. Revisar su registro',
            });
        }

        const { vendor,
            client,
            product,
            cantidad,
            precio_venta_total,
            fecha,
            estado,
        } = req.body;

        ventaActualizar = {
            vendor,
            client,
            product,
            cantidad,
            precio_venta_total,
            fecha,
            estado,
        };

        await Ventas.findByIdAndUpdate(id, ventaActualizar);

        return resp.status(201).json({
            msg: 'venta actualizada',
            ventaActualizar,
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            estatus: false,
            msg: 'Error al actualizar venta',
        });
    }
};

const eliminarVenta = async (req, resp = response) => {
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
};

const getVentasByProducto = async (req, resp = response) => {
    const { producto } = req.body;

    try {
        let ventasByProducto = await Ventas
            .find({ producto })
            .populate('vendedor', '_id nombre')
            .populate('cliente', 'nombre')
            .populate('producto', 'codigo descripcion precio_venta unidad');

        if (!ventasByProducto) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe ninguna venta con ese producto',
            });
        }
        return resp.status(201).json({
            msg: 'Filtro de Ventas por producto',
            ventasByProducto,
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            estatus: false,
            msg: 'Error al filtrar venta por producto',
        });
    }
};

const getVentasByCliente = async (req, resp = response) => {
    const { cliente } = req.body;

    try {
        let ventasByCliente = await Ventas
            .find({ cliente })
            .populate('vendedor', '_id nombre')
            .populate('cliente', 'nombre')
            .populate('producto', 'codigo descripcion precio_venta unidad');

        if (!ventasByCliente) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe ninguna venta con ese cliente',
            });
        }
        return resp.status(201).json({
            msg: 'Filtro de Ventas por cliente',
            ventasByCliente,
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            estatus: false,
            msg: 'Error al filtrar venta por cliente',
        });
    }
};

const getVentasByID = async (req, resp = response) => {
    const id = req.params.id;
    try {
        let ventaByID = await Ventas.findById(id);
        if (!ventaByID) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe ninguna venta con ese ID',
            });
        }

        return resp.status(201).json({
            msg: 'Filtro de Ventas por ID',
            ventaByID,
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            estatus: false,
            msg: 'Error al filtrar venta',
        });
    }
};


module.exports = {
    getVentas,
    setVentas,
    actualizarVenta,
    eliminarVenta,
    getVentasByProducto,
    getVentasByCliente,
    getVentasByID
}