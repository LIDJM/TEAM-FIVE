import React from 'react';
import {useForm} from 'react-hook-form';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import notie from 'notie';
import 'notie/dist/notie.css';
import '../../index.css';

export const Login = () => {
	const auth = useAuth();

	const responseGoogle = async (respuesta) => {
		//console.log(respuesta);
		try {
			const {status, data} = await axios({
				method: 'POST',
				url: 'http://localhost:4001/api/google/login',
				headers: {
					Authorization: `Bearer ${respuesta.tokenId}`,
				},
			});
			console.log('status', status);
			console.log('data', data);

			if (status === 200) {
				auth.setToken(data.token);
				auth.setUser({uid: data.uid, name: data.name});
			} else if (status === 201) {
				notie.alert({text: data.msg, type: 'success', time: 10});
			}
		} catch (error) {
			// if (error.response.status === 401) {
			// 	notie.alert({
			// 		text: error.response.data.msg,
			// 		type: 'warning',
			// 		time: 10,
			// 	});
			// } else {
			// 	notie.alert({
			// 		text: error.response.data.msg,
			// 		type: 'error',
			// 		time: 10,
			// 	});
			// }
		}
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
								clientId='552058111179-gqr5bk17o5oqd5d358r72pbhkr8fl278.apps.googleusercontent.com'
								buttonText='Login'
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
