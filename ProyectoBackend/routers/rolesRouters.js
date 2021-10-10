const {Router} = require('express');
const router = Router();
const {
	getRoles,
	setRol,
	upgradeRol,
	deleteRol,
} = require('../controllers/rolController');

router.get('/Show', getRoles);

router.post('/New', setRol);

router.put('/Upgrade', upgradeRol);

router.delete('/Delete', deleteRol);

module.exports = router;
