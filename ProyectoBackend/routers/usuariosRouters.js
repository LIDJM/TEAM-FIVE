const {Router} = require('express');
const router = Router();
const {
	getUsuarios,
	newUsuario,
	upgradeUsuario,
	deleteUsuario,
	setUsuario,
} = require('../controllers/usuarioController');

router.get('/Show', getUsuarios);

router.get('/Set', setUsuario);

router.post('/New', newUsuario);

router.put('/Upgrade/:id', upgradeUsuario);

router.delete('/Delete/:id', deleteUsuario);

module.exports = router;
