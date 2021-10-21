const {Router} = require('express');

const router = Router();

const {getVentas, 
    setVentas, 
    actualizarVenta, 
    eliminarVenta, 
    getVentasByProducto,
    getVentasByCliente,
    getVentasByID } = require('../controllers/ventasController');

router.get('/listar', getVentas);

router.post('/registrar', setVentas);

router.put('/actualizar/:id', actualizarVenta);

router.delete('/eliminar/:id', eliminarVenta);

router.get('/filtroVentaProducto/:producto_id', getVentasByProducto);

router.get('/filtroVentaCliente/:cliente_id', getVentasByCliente);

router.get('/filtroVentaId/:id', getVentasByID);

module.exports = router;