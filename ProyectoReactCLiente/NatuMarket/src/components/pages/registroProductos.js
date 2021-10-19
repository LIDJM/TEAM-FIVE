import React from 'react';

const registroProductos = () => {
	return (
		<div className = 'page_content'>
		<div className='formulario'>
			<form action='' class='form-registro'>
				<form action='' class=''>
					<div class='form-group'>
						<div class='row'>
							<div class='col-md-6'>
								<input
									type='text'
									class='form-control'
									placeholder='Categoría'
								/>
							</div>
							<div class='col-md-6'>
								<input
									type='text'
									class='form-control'
									placeholder='Código'
								/>
							</div>
						</div>
					</div>
					<div class='form-group'>
						<div class='row'>
							<div class='col-md-6'>
								<input
									type='text'
									class='form-control'
									placeholder='Descripción'
								/>
							</div>

							<div class='col-md-6'>
								<input
									type='text'
									class='form-control'
									placeholder='Imagen'
								/>
							</div>
						</div>
					</div>
					<div class='form-group'>
						<div class='row'>
							<div class='col-md-6'>
								<input
									type='text'
									class='form-control'
									placeholder='Stock'
								/>
							</div>

							<div class='col-md-6'>
								<input
									type='text'
									class='form-control'
									placeholder='Unidad de Medida'
								/>
							</div>
						</div>
					</div>
					<div class='form-group'>
						<div class='row'>
							<div class='col-md-6'>
								<input
									type='text'
									class='form-control'
									placeholder='Precio de Compra'
								/>
							</div>

							<div class='col-md-6'>
								<input
									type='text'
									class='form-control'
									placeholder='Precio de Venta'
								/>
							</div>
						</div>
					</div>

					<div class='form-group'>
						<div class='row'>
							<div class='col-md-6'>
								<select class='form-control' name='' id=''>
									<option value='disponible'>Disponible</option>
									<option value='noDisponible'>No Disponible</option>
								</select>
							</div>
						</div>
					</div>

					<button class='btn btn-primary'>Registrar</button>
				</form>
			</form>
		</div>
		</div>
	);
};

export default registroProductos;
