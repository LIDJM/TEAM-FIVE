const {Router} = require('express');
const router = Router();
const {
	getUsuarios,
	setUsuario,
	upgradeUsuario,
	deleteUsuario,
} = require('../controllers/usuarioController');

router.get('/Show', getUsuarios);

router.post('/New', setUsuario);

router.put('/Upgrade/:id', upgradeUsuario);

router.delete('/Delete/:id', deleteUsuario);

module.exports = router;
