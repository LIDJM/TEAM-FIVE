const {Router} = require('express');
const router = Router();

const {
    getUnidades, 
    setUnidad, 
    actualizarUnidad, 
    eliminarUnidad,
} = require('../controllers/unidades');


router.get('/listar', getUnidades);

router.post('/crear', setUnidad);

router.put('/actualizar/:id', actualizarUnidad);

router.delete('/eliminar/:id', eliminarUnidad);

module.exports = router;