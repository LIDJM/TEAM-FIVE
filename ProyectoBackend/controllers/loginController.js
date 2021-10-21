const {response} = require('express');
const Usuario = require('../models/usuarioModels');
const {generarJWT} = require('../helpers/jwt');

const googleLogin = async (req, resp = response) => {
	const {uid: idToken, name, email} = req;

	try {
		//** .populate trae los datos de esa llave */
		let usuario = await Usuario.findOne({
			email,
			idToken,
		}).populate('estado');

		if (usuario) {
			if (usuario.rol.name === 'pendiente') {
				resp.status(401).json({
					ok: false,
					msg: 'Usuario no autorizado por el admin',
				});
			} else {
				const token = await generarJWT(usuario.id, usuario.name);
				resp.json({
					ok: true,
					msg: 'Ok',
					uid: usuario.id,
					name: usuario.name,
					token,
				});
			}
		} else {
			usuario = new Usuario({
				name,
				email,
				password: idToken,
				idToken,
			});

			const newUser = await usuario.save();
			resp.status(201).json({
				ok: true,
				msg: 'Usuario creado con exito',
				uid: newUser.id,
				name: newUser.name,
			});
		}
	} catch (error) {}

	resp.json({
		ok: true,
		msg: 'Google login exitoso',
	});
};

module.exports = {
	googleLogin,
};
