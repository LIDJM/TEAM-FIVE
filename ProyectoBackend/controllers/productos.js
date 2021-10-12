const {response, json} = require('express');
const Producto = require('../models/Producto')


const getProductos = async (req, resp = response) => {
    const products = await Producto.find();
    
    resp.json({
        ok: true,
        msg: 'Listar Productos',
        products
    });
};

const setProducto = async (req, resp = response) => {

    const producto = new Producto(req.body);

    try{

        const produ = await producto.save();

        resp.status(201).json({
            ok: true,
            msg: 'Producto creado',
            producto: produ
        });

    }catch (error){
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al crear el Producto'
        })
    }

    // resp.json({
    //     ok: true,
    //     msg: 'Crear Producto'
    // });
};

const actualizarProducto = async (req, resp = response) => {
    const id = req.params.id;
    try{
        let productoActualizar = await Producto.findById(id);
        if(!productoActualizar){
            return resp.status(400).json({
                estatus: false,
                msg: 'El producto no existe'
            });
            
        }
        const {categoria, codigo, descripcion, imagen, stock, precio_compra, precio_venta} = req.body;

        productoActualizar = {categoria, codigo, descripcion, imagen, stock, precio_compra, precio_venta};
        await Producto.findByIdAndUpdate(id, productoActualizar);

        return resp.status(201).json({
            msg: 'Producto actualizado',
            uid: productoActualizar.id,
            name: productoActualizar.name
        });
    } catch (error){
        console.log(error);
        resp.status(500).json({
            estatus: false,
            msg: 'Error al actualizar producto'
        })
    }


    resp.json({
        ok: true,
        msg: 'Actualizar Productos'
    });
};

const eliminarProducto = async (req, resp = response) => {
    const id = req.params.id;

    try {
        let productoEliminar = await Producto.findById(id);

        if (!productoEliminar) {
            return resp.status(400).json({
                estatus: false,
                msg: 'No existe un producto con ese id',
            });
        }

        await Producto.findByIdAndDelete(id);
        return resp.status(201).json({
            msg: 'Producto Eliminado'
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            estatus: false,
            msg: 'Error al eliminar el producto'
        });
    }

    // resp.json({
    //     ok: true,
    //     msg: 'Eliminar Productos'
    // });
};

const getProducto = async (req, resp = response) => {
    const {codigo} = req.body;
    const producto = await Producto.findOne({codigo}).populate('categoria').populate('unidad');

    resp.json({
        estatus: true,
        msg: 'Busqueda de Producto',
        producto,
    });
};

module.exports = {
    getProductos,
    setProducto,
    actualizarProducto,
    eliminarProducto, 
    getProducto,   
};