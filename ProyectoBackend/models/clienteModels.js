const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: true
    },

    nit_id: {
        type: String,
        required: true
    }
},
    {
        collection: 'clientes'
    });

module.exports = model('Cliente', ClienteSchema);

