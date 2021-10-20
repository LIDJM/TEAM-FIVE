const {Router} = require('express');
const router = Router();

router.post('/google/login', validarGoogle, googleLogin);
