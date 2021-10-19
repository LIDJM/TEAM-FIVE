import React from 'react';
import {useForm} from 'react-hook-form';

const registroUsuarios = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
		// eslint-disable-next-line react-hooks/rules-of-hooks
	} = useForm();
	const onSubmit = (data) => console.log(data);
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
									placeholder='Identificacion'
									{...register('Identificacion', {})}
								/>
							</div>
							<div className='col-md-6'>
								<input
									type='text'
									placeholder='Nombre'
									{...register('Nombre', {})}
								/>
							</div>
						</div>
					</div>
					<div className='form-group'>
						<div className='row'>
							<div className='col-md-6'>
								<input
									type='text'
									placeholder='Telefono'
									{...register('Telefono', {})}
								/>
							</div>
							<div className='col-md-6'>
								<input
									type='text'
									placeholder='Direccion'
									{...register('Direccion', {})}
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
									{...register('Email', {})}
								/>
							</div>
						</div>
					</div>
					<div className='form-group'>
						<div className='row'>
							<div className='col-md-6'>
								<select {...register}>
									<option value='Administrador'>Administrador</option>
									<option value=' Vendedor'> Vendedor</option>
								</select>
							</div>
							<div className='col-md-6'>
								<select {...register}>
									<option value='Activo'>Activo</option>
									<option value=' No Activo'> No Activo</option>
									<option value=' Pendiente'> Pendiente</option>
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
