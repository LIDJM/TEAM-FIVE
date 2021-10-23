const { response } = require('express');
const Venta = require('../models/ventasModels');
const Rol = require('../models/rolModels');
const Cliente = require('../models/clienteModels');
const Producto = require('../models/Producto');
const Usuario = require('../models/usuarioModels');
const Unidad = require('../models/UnidadModel');

const getVentas = async (req, resp = response) => {

    const ventas = await Venta
        .find()
        .populate('vendedor', '_id nombre')
        .populate('cliente', 'nombre')
        .populate('producto', 'codigo descripcion precio_venta unidad');

    resp.json(  
        ventas
    );
};

const setVentas = async (req, resp = response) => {

    const venta = new Venta(req.body);
    const id_producto = venta.producto._id;
    const id_cliente = venta.cliente._id;
    const id_vendedor = venta.vendedor._id;
    
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
    const posibleVenta = new Venta(req.body);
    const id = req.params.id;
    const id_producto = posibleVenta.producto._id;
    const id_cliente = posibleVenta.cliente._id;
    const id_vendedor = posibleVenta.vendedor._id;
    
    try {
        let ventaActualizar = await Venta.findById(id);
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

        await Venta.findByIdAndUpdate(id, ventaActualizar);

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
        let VentaEliminar = await Venta.findById(id);

        if (!VentaEliminar) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe una venta con ese id',
            });
        }

        await Venta.findByIdAndDelete(id);
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
    /*const { producto } = req.body;*/
    
    const producto_id = req.params.producto_id;

    try {
        let ventasByProducto = await Venta
        .find({
            producto: producto_id, 
        })
        // let ventasByProducto = await Ventas
        //     .find({ producto })
        //     .populate('vendedor', '_id nombre')
        //     .populate('cliente', 'nombre')
        //     .populate('producto', 'codigo descripcion precio_venta unidad');

        if (!ventasByProducto) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe ninguna venta con ese producto',
                intendedProduct: producto_id,
            });
        }
        return resp.status(201).json({
            msg: 'Filtro de Ventas por producto',
            prd_id: producto_id,
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
    const cliente_id = req.params.cliente_id;

    try {
        let ventasByCliente = await Venta
        .find({
            cliente: cliente_id,
        })
    
        if (!ventasByCliente) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe ninguna venta con ese cliente',
                cliente_id: cliente_id,
            });
        }
        return resp.status(201).json({
            msg: 'Filtro de Ventas por cliente',
            cliente_id: cliente_id,
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

const getVentasByVendedor = async (req, resp = response) => {
    /*const { producto } = req.body;*/
    
    const vendedor_id = req.params.vendedor_id;

    try {
        let ventasByVendedor = await Venta
        .find({
            vendedor: vendedor_id, 
        })
        // let ventasByProducto = await Ventas
        //     .find({ producto })
        //     .populate('vendedor', '_id nombre')
        //     .populate('cliente', 'nombre')
        //     .populate('producto', 'codigo descripcion precio_venta unidad');

        if (!ventasByVendedor) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe ninguna venta con ese vendedor',
                intendedVendor: vendedor_id,
            });
        };
        
        return resp.status(201).json({
            msg: 'Filtro de Ventas por vendedor',
            vendor_id: vendedor_id,
            ventasByVendedor,
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            estatus: false,
            msg: 'Error al filtrar venta por Vendedor',
        });
    }
};

const getVentasByID = async (req, resp = response) => {
    const id = req.params.id;
    try {
        let ventaByID = await Venta.findById(id);
        if (!ventaByID) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe ninguna venta con ese ID',
                vid: id,
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
            msg: 'Error al filtrar venta por ID',
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
    getVentasByVendedor,
    getVentasByID
}