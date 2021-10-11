const {response} = require('express');
const Producto = require('../models/Producto')


const getProductos = (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'Listar Productos'
    });
}

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

    resp.json({
        ok: true,
        msg: 'Crear Producto'
    });
}

const actualizarProducto = (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'Actualizar Productos'
    });
}

const eliminarProducto= (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'Eliminar Productos'
    });
}

module.exports = {
    getProductos,
    setProducto,
    actualizarProducto,
    eliminarProducto    
}