const {response} = require('express');
const {OAuth2Client} = require('google-auth-library');

const client = new OAuth2Client(
	'552058111179-gqr5bk17o5oqd5d358r72pbhkr8fl278.apps.googleusercontent.com'
);

const validarGoogle = (req, res = response, next) => {
	/** Método: Authorization > Bearer token */
	let token = '';
	token =
		req.headers['x-access-token'] || req.headers['authorization'];

	// console.log(token);

	if (!token) {
		return res.status(401).json({
			ok: false,
			msg: 'No se ha proporcionado un token valido',
		});
	}

	/** Método: Authorization > Bearer token */
	if (token.startsWith('Bearer ')) {
		token = token.slice(7, token.length);
	}

	// console.log(token);

	try {
		//** client.verifyIdToken es una promesa
		// .then si se ejecuta la promesa de manera exitosa
		// .catch lo recibe si la promesa falla*/
		client
			.verifyIdToken({
				idToken: token,
				audience:
					'552058111179-gqr5bk17o5oqd5d358r72pbhkr8fl278.apps.googleusercontent.com',
			})
			.then((resp) => {
				const {sub, name, email} = resp.payload;
				console.log(sub, name, email);
				req.uid = sub;
				req.name = name;
				req.email = email;
				next();
			})
			.catch((error) => {
				return res.status(401).json({
					ok: false,
					msg: 'Token invalido',
				});
			});
	} catch (error) {
		return res.status(401).json({
			ok: false,
			msg: 'Token invalido',
		});
	}
};

module.exports = {
	validarGoogle,
};
