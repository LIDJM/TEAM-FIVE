import React from 'react';
import {useState, useEffect} from 'react';
import Tabla from '../Tabla/tabla';
import DatosCabeceraVentas from '../Datos/DatosCabeceraVentas';
import axios from 'axios';

const Ventas = () => {
	const [ventas, setVentas] = useState([]);

	useEffect(async () => {
		let response = await axios.get(
			'http://localhost:4001/api/ventas/listar'
		);
		console.log(response.data);
		setVentas(response.data);
	}, []);

	const setEstado = (estado) => {
		if (estado === 'Realizada') {
			return (
				<td>
					<span class='status text-success'>&bull;</span>
					Realizada
				</td>
			);
		} else if (estado === 'En Trámite') {
			return (
				<td>
					<span class='status text-warning'>&bull;</span>
					En Trámite
				</td>
			);
		} else if (estado === 'No Realizada') {
			return (
				<td>
					<span class='status text-danger'>&bull;</span>
					No Realizada
				</td>
			);
		}
	};

	const setVentasTotal = (valor_unitario, cantidad) => {
        const vt = valor_unitario * cantidad;
        return vt;
    };

	const setUnidadProducto = (unidad) =>{
		if (unidad === '6165cb30255654c1a93c1073') {
			return (
				<td>
					{/* <span class='status text-success'>&bull;</span> */}
					kg
				</td>
			);
		// } else if (estado === 'En Trámite') {
		// 	return (
		// 		<td>
		// 			<span class='status text-warning'>&bull;</span>
		// 			En Trámite
		// 		</td>
		// 	);
		// } else if (estado === 'No Realizada') {
		// 	return (
		// 		<td>
		// 			<span class='status text-danger'>&bull;</span>
		// 			No Realizada
		// 		</td>
		// 	);
		// }
	};

	}

	return (
		<>
			<div className='page_content'>
				<table id='agregarBuscar'>
					<div class='row'>
						<tr>
							<th>
								<div class='col-sm-7'>
									<a href='/registroVentas' class='btn btn-primary'>
										<i class='material-icons'>&#xE147;</i>
										<span>Ingresar nueva Venta</span>
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
								{ventas.map((venta) => {
									return (
										<tr>
											<td>{venta.vendedor.nombre}</td>
											<td>{venta.cliente.nombre}</td>
											<td>{venta.producto.codigo}</td>
											<td>{venta.producto.descripcion}</td>
											{setUnidadProducto(venta.producto.unidad)}
											<td>{venta.producto.precio_venta}</td>
											{/* <td>{venta.producto.unidad}</td> */}
											<td>{venta.cantidad}</td>
											{setVentasTotal(venta.producto.precio_venta, venta.cantidad)}
											{setEstado(venta.estado)}
											<td>{venta.fecha}</td>
											<td>{venta._id}</td>
											<td>
												<a
													href='#'
													className='edit'
													title='Edit'
													data-toggle='tooltip'>
													<i className='material-icons'>&#xE254;</i>
												</a>
												<a
													href='#'
													className='delete'
													title='Delete'
													data-toggle='tooltip'>
													<i className='material-icons'>&#xE872;</i>
												</a>
												</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					}
				/>
			</div>
		</>
	);
};

export default Ventas;
