import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import notie from 'notie';
import 'notie/dist/notie.css';

const CambiosUsuarios = () => {
	const location = useLocation();
	const {data} = location.state;

	const setEstado = (estado) => {
		if (estado === 'autorizado') {
			return '6170e5b58bf6eda3e5ac6bc9';
		} else if (estado === 'pendiente') {
			return '6170e65fdb034b5294554d01';
		} else {
			return '6170e673db034b5294554d04';
		}
	};

	const {
		register,
		handleSubmit,
		formState: {errors},
		// eslint-disable-next-line react-hooks/rules-of-hooks
	} = useForm();
	const onSubmit = async (datos) => {
		console.log(datos);
		const respuesta = await axios.put(
			`http://localhost:4001/api/usuarios/Upgrade/${data._id}`,
			{
				password: datos.password,
				nombre: datos.nombre,
				email: datos.email,
				cedula: datos.cedula,
				rol: datos.rol,
				estado: setEstado(datos.estado),
			}
		);
		if (respuesta.status === 201) {
			notie.alert({
				text: respuesta.data.msg,
				type: 'success',
				time: 10,
			});
		}
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
									defaultValue={data.cedula}
									{...register('cedula', {})}
								/>
							</div>
							<div className='col-md-6'>
								<input
									type='text'
									defaultValue={data.nombre}
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
									defaultValue={data.password}
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
									defaultValue={data.email}
									{...register('email', {})}
								/>
							</div>
						</div>
					</div>
					<div className='form-group'>
						<div className='row'>
							<div className='col-md-6'>
								<select
									defaultValue={data.rol}
									{...register('rol', {})}>
									<option value='administrador'>Administrador</option>
									<option value='vendedor'>Vendedor</option>
									<option value='no asignado'>No asignado</option>
								</select>
							</div>
							<div className='col-md-6'>
								<select
									defaultValue={data.estado.nombre}
									{...register('estado', {})}>
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
export default CambiosUsuarios;
