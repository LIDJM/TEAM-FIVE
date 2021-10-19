import React from 'react';
import Tabla from '../components/Tabla';
import DatosCabeceraVentas from '../Datos/DatosCabeceraVentas';
import DatosCuerpoVentas from '../Datos/DatosCuerpoVentas';

const ventas = () => {

	const setVentasTotal = (valor_unitario, cantidad) => {
		const vt = valor_unitario * cantidad;
		return vt;
	}

	return (
		<>
			<div className='page_content'>
				<table id='agregarBuscar'>
					<div class='row'>
						<tr>
							<th>
								<div class='col-sm-7'>
									<a href='/registroProductos' class='btn btn-primary'>
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
				</table>
				<Tabla 
					Datos = {
						<table class='table table-striped table-hover'>
							<thead>
								<tr>
									{DatosCabeceraVentas.map((item, index) => {
										return <th key='{index}'>{item.nombre}</th>;
									})}
								</tr>
							</thead>
							<tbody>
								{DatosCuerpoVentas.map((item, index) => {
										return (
											<tr key = {index}>
												<th> {item.vendedor} </th>
												<th> {item.cliente} </th>
												<th> {item.producto} </th>
												<th> {item.cantidad} </th>
												<th> {item.precio_unitario} </th>
												<th>
													{setVentasTotal(item.precio_unitario, item.cantidad)}
												</th>
												<th> {item.fecha} </th>
											</tr>
										)
								})}
							</tbody>

						</table>
					}
				>
					
				</Tabla>
			</div>
		</>
	);
};

export default ventas;
