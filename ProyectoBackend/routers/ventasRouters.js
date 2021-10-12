const {Router} = require('express');

const router = Router();

const {getVentas, setVentas, actualizarVenta, eliminarVenta,} = require('../controllers/ventasController');

router.get('/listar', getVentas);

router.post('/registrar', setVentas);

router.put('/actualizar/:id', actualizarVenta);

router.delete('/eliminar/:id', eliminarVenta);

module.exports = router;