import React from 'react';

const registroUsuarios = () => {
	return (
		<div className='formulario'>
			<form action='' class='form-registro'>
				<form action='' class=''>
					<div class='form-group'>
						<div class='row'>
							<div class='col-md-4'>
								<input
									type='text'
									class='form-control'
									placeholder='Identificación'
								/>
							</div>
							<div class='col-md-8'>
								<input
									type='text'
									class='form-control'
									placeholder='Nombre'
								/>
							</div>
						</div>
					</div>
					<div class='form-group'>
						<div class='row'>
							<div class='col-md-4'>
								<input
									type='text'
									class='form-control'
									placeholder='Telefono'
								/>
							</div>

							<div class='col-md-6'>
								<input
									type='text'
									class='form-control'
									placeholder='Dirección'
								/>
							</div>
						</div>
					</div>

					<div class='form-group'>
						<div class='row'>
							<div class='col-md-8'>
								<input
									type='text'
									class='form-control'
									placeholder='Email'
								/>
							</div>
						</div>
					</div>
					<div class='form-group'>
						<div class='row'>
							<div class='col-md-4'>
								<select class='form-control' name='' id=''>
									<option value='administrador'>Administrador</option>
									<option value='almacenista'>Almacenista</option>
									<option value='vendedor'>Vendedor</option>
								</select>
							</div>
							<div class='col-md-4'>
								<select class='form-control' name='' id=''>
									<option value='activo'>Activo</option>
									<option value='suspendido'>Pendiente</option>
									<option value='desabilitado'>No activo</option>
								</select>
							</div>
						</div>
					</div>

					<button class='btn btn-primary'>Registrar</button>
				</form>
			</form>
		</div>
	);
};

export default registroUsuarios;
