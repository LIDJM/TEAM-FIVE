import React from 'react';
import './Tabla.css';

const Tabla = (props) => {
	return (
		<>
			{/* <table id='agregarBuscar'>
				<div class='row'>
					<tr>
						<th>
							<div class='col-sm-7'>
								<a href='/registroUsuarios' class='btn btn-primary'>
									<i class='material-icons'>&#xE147;</i>
									<span>Ingresar Producto</span>
								</a>
							</div>
						</th>
						<th>
							<div class='input-group'>
								<div class='form-outline'>
									<input
										type='search'
										id='form1'
										class='form-control'
										placeholder='Buscar'
									/>
								</div>
								<button type='button' class='btn btn-primary'>
									<i class='fa fa-search'></i>
								</button>
							</div>
						</th>
					</tr>
				</div>
			</table> */}
			<div className='table-responsive'>
				<div className='table-wrapper'>{props.Datos}</div>
			</div>
		</>
	);
};

export default Tabla;
