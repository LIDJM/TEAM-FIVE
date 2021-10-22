import React from 'react';
import {useState, useEffect} from 'react';
import Tabla from '../Tabla/tabla';
import DatosCabeceraUsuarios from '../Datos/DatosCabeceraUsuarios';
import axios from 'axios';

const Usuarios = () => {
	const [usuarios, setUsuarios] = useState([]);

	useEffect(async () => {
		let response = await axios.get(
			'http://localhost:4001/api/usuarios/Show'
		);
		console.log(response.data);
		setUsuarios(response.data);
	}, []);

	const setEstado = (estado) => {
		if (estado === 'autorizado') {
			return (
				<td>
					<span class='status text-success'>&bull;</span>
					Autorizado
				</td>
			);
		} else if (estado === 'pendiente') {
			return (
				<td>
					<span class='status text-warning'>&bull;</span>
					Pendiente
				</td>
			);
		} else if (estado === 'no autorizado') {
			return (
				<td>
					<span class='status text-danger'>&bull;</span>
					No Autorizado
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
									<a href='/registroUsuarios' class='btn btn-primary'>
										<i class='material-icons'>&#xE147;</i>
										<span>Ingresar nuevo Usuario</span>
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
									{DatosCabeceraUsuarios.map((item, index) => {
										return <th key='{index}'>{item.nombre}</th>;
									})}
								</tr>
							</thead>
							<tbody>
								{usuarios.map((usuario) => {
									return (
										<tr>
											<td>{usuario.cedula}</td>
											<td>{usuario.nombre}</td>
											<td>{usuario.email}</td>
											<td>{usuario.rol}</td>
											{setEstado(usuario.estado.nombre)}
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

export default Usuarios;
