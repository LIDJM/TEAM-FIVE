const {Router} = require('express');

const router = Router();

const {getVentas, 
    setVentas, 
    actualizarVenta, 
    eliminarVenta, 
    getVentasByProducto,
    getVentasByCliente,
    getVentasByIDCliente,
    getVentasByNombreCliente,
    getVentasByVendedor,
    getVentasByID
    } = require('../controllers/ventasController');

router.get('/listar', getVentas);

router.post('/registrar', setVentas);

router.put('/actualizar/:id', actualizarVenta);

router.delete('/eliminar/:id', eliminarVenta);

router.get('/filtrar/id_producto/:producto_id', getVentasByProducto);

router.get('/filtrar/id_cliente/:cliente_id', getVentasByCliente);

router.get('/filtrar/nit_cc_cliente/:cliente_id', getVentasByIDCliente);

router.get('/filtrar/nombre_cliente/:cliente_nombre', getVentasByNombreCliente);

router.get('/filtrar/vendedor/:vendedor_id', getVentasByVendedor);

router.get('/filtrar/id_venta/:id', getVentasByID);

module.exports = router;