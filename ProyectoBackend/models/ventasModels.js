const { Schema, model } = require('mongoose');

const ventaSchema = Schema({

    vendedor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },

    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    },

    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
    },

    cantidad: {
        type: Number,
        required: true
    },

    precio_venta_total: {
        type: Number,
        required: true
    },

    fecha: {
        type: Date,
        default: Date.now,
        required: true
    },

    estado: {
        type: String,
        default: "Realizado",
        require: true
    }
});

module.exports = model('Ventas', ventaSchema);