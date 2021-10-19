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
									<a href='../registroVentas' class='btn btn-primary'>
										<i class='material-icons'>&#xE147;</i>
										<span>Ingresar Venta</span>
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
					Datos={
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
										<tr key={index}>
											<td> {item.vendedor} </td>
											<td> {item.cliente} </td>
											<td> {item.producto} </td>
											<td> {item.cantidad} </td>
											<td> {item.precio_unitario} </td>
											{setVentasTotal(item.precio_unitario, item.cantidad)}
											<td> {item.fecha} </td>
											<td> {item.id} </td>
											<td>
												<a
													href='#'
													class='view'
													title='View'
													data-toggle='tooltip'
												>
													<i class='material-icons'>&#xE417;</i>
												</a>
												<a
													href='#'
													class='edit'
													title='Edit'
													data-toggle='tooltip'
												>
													<i class='material-icons'>&#xE254;</i>
												</a>
												<a
													href='#'
													class='delete'
													title='Delete'
													data-toggle='tooltip'
												>
													<i class='material-icons'>&#xE872;</i>
												</a>
											</td>
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
