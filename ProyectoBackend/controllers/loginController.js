const {response} = require('express');
const Usuario = require('../models/usuarioModels');
const {generarJWT} = require('../helpers/jwt');

const googleLogin = async (req, resp = response) => {
	const {uid: idToken, name, email} = req;
	console.log(name);
	console.log(email);
	console.log(idToken);

	try {
		//** .populate trae los datos de esa llave */
		let usuario = await Usuario.findOne({
			email,
			idToken,
		}).populate('estado');
		console.log(usuario);
		if (usuario) {
			if (usuario.estado.nombre === 'autorizado') {
				const token = await generarJWT(usuario.id, usuario.nombre);
				resp.json({
					ok: true,
					msg: 'Ok',
					uid: usuario.id,
					name: usuario.nombre,
					token,
				});
				console.log(token);
			} else {
				resp.status(401).json({
					ok: false,
					msg: 'Usuario no autorizado por el admin',
				});
			}
		} else {
			usuario = new Usuario({
				nombre: name,
				email,
				password: idToken,
				idToken,
			});
			console.log(usuario);

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
