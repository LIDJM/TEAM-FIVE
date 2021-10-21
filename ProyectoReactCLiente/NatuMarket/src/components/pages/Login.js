import React from 'react';
import {useForm} from 'react-hook-form';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';

const Login = () => {
	const responseGoogle = async (respuesta) => {
		console.log(respuesta);
		try {
			const resp = await axios({
				method: 'POST',
				url: 'http://localhost:4001/api/google/login',
				headers: {
					Authorization: `Bearer ${respuesta.tokenId}`,
				},
			});
			console.log(resp);
		} catch (error) {}
	};

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();
	const onSubmit = (datos) => {
		console.log(datos);
	};
	console.log(errors);

	return (
		<div className='page_content'>
			<div className='formulario'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='form-group'>
						<div className='row'>
							<div className='col-md-12'>
								<input
									type='text'
									placeholder='Nombre'
									{...register('nombre', {})}
								/>
							</div>
						</div>
					</div>
					<div className='form-group'>
						<div className='row'>
							<div className='col-md-12'>
								<input
									type='email'
									placeholder='Email'
									{...register('email', {})}
								/>
							</div>
						</div>
					</div>
				</form>
				<div className='form-group'>
					<div className='row'>
						<div className='col-md-12'>
							<GoogleLogin
								clientId='552058111179-58af81em76valb4mecmb1229ru2oekoe.apps.googleusercontent.com'
								buttonText='PEPE'
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={'single_host_origin'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
