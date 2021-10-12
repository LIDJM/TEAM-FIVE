const {Schema, model} = require('mongoose');

const UnidadSchema = Schema({
    nombre: {
        type: String,
        required: true
    }
},
{
    collection: 'unidades'
});

module.exports = model('Unidad', UnidadSchema);