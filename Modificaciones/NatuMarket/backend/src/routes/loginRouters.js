const {Router} = require('express');
const {googleLogin} = require('../controllers/loginController');
const {validarGoogle} = require('../middlewares/validarGoogle');
const router = Router();

router.post('/login', validarGoogle, googleLogin);

module.exports = router;
