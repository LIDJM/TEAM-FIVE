const {Router} = require('express');
const router = Router();

const {getProductos, setProducto, actualizarProducto, eliminarProducto} = require('../controllers/productos');


router.get('/listar', getProductos);

router.post('/crear', setProducto);

router.put('/actualizar/:id', actualizarProducto);

router.delete('/eliminar/:id', eliminarProducto);

module.exports = router;