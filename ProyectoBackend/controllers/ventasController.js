const { response } = require('express');
const Venta = require('../models/ventasModels');
const Rol = require('../models/rolModels');
const Cliente = require('../models/clienteModels');
const Producto = require('../models/Producto');
const Usuario = require('../models/usuarioModels');
const Unidad = require('../models/UnidadModel');

const assert = require('assert');

const getVentas = async (req, resp = response) => {

    const ventas = await Venta
        .find()
        .populate('vendedor', '_id nombre')
        .populate('cliente') //todos los campos, por lo cual no especifica (nit/cc, nombre)
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

    const fields = req.body;
    const key_array = Object.keys(fields)
    console.log('keys: ')
    console.log(key_array)

    const id = req.params.id;

    try {
        let ventaActualizar = await Venta.findById(id);

        console.log("venta a ser actualizada: ")
        console.log(ventaActualizar)

        if (!ventaActualizar || ventaActualizar.length == []) {
            return resp.status(400).json({
                estatus: false,
                msg: 'La venta no existe',
            });
        }

        for (llave of key_array) {
            switch (llave) {
                case 'vendedor':
                    let presunto_vendedor = await Usuario.findById(fields[llave]);
                    if (!presunto_vendedor || presunto_vendedor == []) {
                        return resp.status(400).json({
                            estatus: false,
                            msg: 'No existe el vendedor. Revisar su registro',
                            presunto_vendedor: presunto_vendedor,
                            field_llave: fields[llave],
                        });
                    }
                    ventaActualizar.vendedor = presunto_vendedor;
                    break;

                case 'cliente':
                    let presunto_cliente = await Cliente.findById(fields[llave]);
                    if (!presunto_cliente || presunto_cliente == []) {
                        return resp.status(400).json({
                            estatus: false,
                            msg: 'No existe el cliente al que se le quiere vender',
                            field_llave: fields[llave],
                        });
                    }
                    ventaActualizar.cliente = presunto_cliente;
                    break;

                case 'producto':
                    let presunto_producto = await Producto.findById(fields[llave]);
                    if (!presunto_producto || presunto_producto == []) {
                        return resp.status(400).json({
                            estatus: false,
                            msg: 'No existe el producto que se quiere vender',
                            field_llave: fields[llave],
                        });
                    }
                    ventaActualizar.producto = presunto_producto;
                    break;

                case '_id':
                    //This field is inmutable, so don´t try to modify it.
                    break;
                case 'estado':
                    // let error = ventaActualizar.validateSync();
                    // console.log(error)
                    // assert.equal(error.errors[llave].message,
                    //     'Debe ser Realizada, No Realizada o En Trámite');
                    ventaActualizar[llave] = fields[llave];
                default:
                    ventaActualizar[llave] = fields[llave];
            }
        }

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

//adding filtering by ID cliente, not system ID, but cc/NIT from Client.
const getVentasByIDCliente = async (req, resp = response) => {
    const cliente_id = req.params.cliente_id;
    console.log('cliente_id_req_body: ')
    console.log(cliente_id)
    try {
        let nuevo_cliente = await Cliente
            .find({
                nit_id: cliente_id,
            });
        //console.log('\n presunto_cliente: ')
        //console.log(nuevo_cliente)

        let ventasByCliente = await Venta
            .find({
                cliente: nuevo_cliente,
            })

        //console.log('\n presunto cliente nombre: ')
        //const nombre = nuevo_cliente.map(x => x.nombre) 
        //console.log(nombre)

        //console.log('\n ventas filtradas por presunto cliente: ')
        //console.log(ventasByCliente)

        if (nuevo_cliente.length === 0) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe ningun cliente con ese documento de identificación',
                cliente_id: cliente_id,
            });
        }

        if (ventasByCliente.length === 0) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe ninguna venta con ese cliente',
                cliente_id: cliente_id,
            });

        }

        return resp.status(201).json({
            msg: 'Filtro de Ventas por cliente: ',
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

const getVentasByNombreCliente = async (req, resp = response) => {
    const cliente_nombre = req.params.cliente_nombre;
    //console.log('cliente_nombre_req_body: ')
    //console.log(cliente_nombre)
    try {
        let nuevo_cliente = await Cliente
            .find({
                nombre: cliente_nombre,
            });
        //console.log('\n presunto_cliente: ')
        //console.log(nuevo_cliente)

        let ventasByCliente = await Venta
            .find({
                cliente: nuevo_cliente,
            })

        //console.log('\n presunto cliente nombre: ')
        //const nombre = nuevo_cliente.map(x => x.nombre) 
        //console.log(nombre)

        //console.log('\n ventas filtradas por presunto cliente: ')
        //console.log(ventasByCliente)

        if (nuevo_cliente.length === 0) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe ningun cliente con ese nombre/razón social',
                cliente: cliente_nombre,
            });
        }

        if (ventasByCliente.length === 0) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe ninguna venta con ese cliente',
                cliente: cliente_nombre,
            });

        }

        return resp.status(201).json({
            msg: 'Filtro de Ventas por cliente con el nombre: ',
            cliente: cliente_nombre,
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
    getVentasByIDCliente,
    getVentasByNombreCliente,
    getVentasByVendedor,
    getVentasByID
}