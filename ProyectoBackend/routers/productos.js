const {Router} = require('express');
const router = Router();

const {
    getProductos, 
    setProducto, 
    actualizarProducto, 
    eliminarProducto,
    getProducto,
} = require('../controllers/productos');


router.get('/listar', getProductos);

router.post('/crear', setProducto);

router.put('/actualizar/:id', actualizarProducto);

router.delete('/eliminar/:id', eliminarProducto);

router.get('/buscar', getProducto);

module.exports = router;