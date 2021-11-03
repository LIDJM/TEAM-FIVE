const {Router} = require('express');

const router = Router();

const {getVentas, 
    setVentas, 
    actualizarVenta, 
    eliminarVenta, 
    getVentasByProducto,
    getVentasByCliente,
    getVentasByVendedor,
    getVentasByID } = require('../controllers/ventasController');

router.get('/listar', getVentas);

router.post('/registrar', setVentas);

router.put('/actualizar/:id', actualizarVenta);

router.delete('/eliminar/:id', eliminarVenta);

router.get('/filtroVentaProducto/:producto_id', getVentasByProducto);

router.get('/filtroVentaCliente/:cliente_id', getVentasByCliente);

router.get('/filtroVentaVendedor/:vendedor_id', getVentasByVendedor);

router.get('/filtroVentaId/:id', getVentasByID);

module.exports = router;