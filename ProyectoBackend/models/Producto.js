const {Schema , model} = require('mongoose');

const ProductoSchema = Schema({

    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },

    codigo: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    imagen: {
        type: String,
        required: true
    },

    stock: {
        type: Number,
        required: true
    },

    precio_compra: {
        type: Number,
        required: true
    },

    precio_venta: {
        type: Number,
        required: true
    },

    unidad: {
        type: Schema.Types.ObjectId,
        ref: 'Unidad',
        required: true
    },

    fecha: {
        type: Date,
        default: Date.now
    }

});

module.exports = model('Producto', ProductoSchema);