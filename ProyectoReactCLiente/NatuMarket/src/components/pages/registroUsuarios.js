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
		console.log(datos);
		const setEstado = (estado) => {
			if (estado === 'autorizado') {
				return '617095431c27074d27d530e9';
			} else if (estado === 'pendiente') {
				return '6170957b1c27074d27d530ea';
			} else {
				return '617095991c27074d27d530eb';
			}
		};

		const respuesta = await axios.post(
			'http://localhost:4001/api/usuarios/New',
			{
				password: datos.password,
				cedula: datos.cedula,
				nombre: datos.nombre,
				email: datos.email,
				rol: datos.rol,
				estado: setEstado(datos.estado),
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
