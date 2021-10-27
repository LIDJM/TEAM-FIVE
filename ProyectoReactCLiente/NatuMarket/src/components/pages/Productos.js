import React, { useEffect, useState } from 'react';
import Tabla from '../Tabla/tabla';
import DatosCabeceraProductos from '../Datos/DatosCabeceraProductos';
import axios from 'axios';


const Productos = () => {

	const [data, setData] = useState([]);
	

	const peticionGet = async () => {
		await axios.get('http://localhost:4001/api/productos/listar')
			.then(response => {
				console.log(response.data)
				setData(response.data);
			})
	}

	
	useEffect(async () => {
		await peticionGet();

	}, []);

	
	const setEstado = (estado) => {
		if (estado === 'Disponible') {
			return (
				<td>
					<span class='status text-success'>&bull;</span>
					Disponible
				</td>
			);
		} else if (estado === 'No Disponible') {
			return (
				<td>
					<span class='status text-danger'>&bull;</span>
					No Disponible
				</td>
			);
		}
	};

	return (
		<>
			<div className='page_content'>
				<table id='agregarBuscar'>
					<div class='row'>
						<tr>
							<th>
								<div class='col-sm-7'>
									<a
										href='/registroProductos'
										class='btn btn-primary'>
										<i class='material-icons'>&#xE147;</i>
										<span>Ingresar nuevo Producto</span>
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
									{DatosCabeceraProductos.map((item, index) => {
										return <th key='{index}'>{item.nombre}</th>;
									})}
								</tr>
							</thead>
							<tbody>
								{data.map((producto) => {
									return (
										<tr >
											<td>{producto.categoria.nombre}</td>
											<td>{producto.codigo}</td>
											<td>{producto.descripcion}</td>
											<td>{producto.imagen}</td>
											<td>{producto.stock}</td>
											<td>{producto.precio_compra}</td>
											<td>{producto.precio_venta}</td>
											<td>{producto.unidad.nombre}</td>
											{setEstado(producto.estado)}
											<td>
												<a
													href='#'
													class='edit'
													title='Edit'
													data-toggle='tooltip'>
													<i class='material-icons'>&#xE254;</i>
												</a>
												<a
													href='#'
													class='delete'
													title='Delete'
													data-toggle='tooltip'>
													<i class='material-icons'>&#xE872;</i>
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

export default Productos;
