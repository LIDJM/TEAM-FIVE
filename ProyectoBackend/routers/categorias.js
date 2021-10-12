const {Router} = require('express');
const router = Router();

const {
    getCategorias, 
    setCategoria, 
    actualizarCategoria, 
    eliminarCategoria,
} = require('../controllers/categorias');


router.get('/listar', getCategorias);

router.post('/crear', setCategoria);

router.put('/actualizar/:id', actualizarCategoria);

router.delete('/eliminar/:id', eliminarCategoria);

module.exports = router;