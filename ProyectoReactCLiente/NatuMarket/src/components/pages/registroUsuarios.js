import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

const registroUsuarios = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
		// eslint-disable-next-line react-hooks/rules-of-hooks
	} = useForm();
	const onSubmit = async (datos) => {
		const setRol = (rol) => {
			if (rol === 'administrador') {
				return '616357de91da7751087e0403';
			} else {
				return '6163581191da7751087e0406';
			}
		};

		const respuesta = await axios.post(
			'http://localhost:4001/api/usuarios/New',
			{
				password: datos.password,
				cedula: datos.cedula,
				nombre: datos.nombre,
				email: datos.email,
				rol: setRol(datos.rol),
				estado: datos.estado,
			}
		);

		console.log(respuesta);
	};
	console.log(errors);

	return (
		<div className='page_content'>
			<div className='formulario'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='form-group'>
						<div className='row'>
							<div className='col-md-6'>
								<input
									type='text'
									placeholder='Cedula'
									{...register('cedula', {})}
								/>
							</div>
							<div className='col-md-6'>
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
									type='text'
									placeholder='Password'
									{...register('password', {})}
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
					<div className='form-group'>
						<div className='row'>
							<div className='col-md-6'>
								<select {...register('rol', {})}>
									<option value='administrador'>Administrador</option>
									<option value='vendedor'> Vendedor</option>
								</select>
							</div>
							<div className='col-md-6'>
								<select {...register('estado', {})}>
									<option value='autorizado'>Autorizado</option>
									<option value='pendiente'>Pendiente</option>
									<option value='no autorizado'>No autorizado</option>
								</select>
							</div>
						</div>
					</div>

					<input type='submit' className='btn btn-primary' />
				</form>
			</div>
		</div>
	);
};
export default registroUsuarios;
