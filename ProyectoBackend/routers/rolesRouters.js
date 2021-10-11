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

router.put('/Upgrade/:id', upgradeRol);

router.delete('/Delete/:id', deleteRol);

module.exports = router;
