import React from 'react';
import Tabla from '../Tabla/tabla';
import DatosCabeceraUsuarios from '../Datos/DatosCabeceraUsuarios';
import {
	DatosCuerpoUsuarios,
	mostrar,
} from '../Datos/DatosCuerpoUsuarios';

const usuarios = () => {
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
	mostrar();
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
								{DatosCuerpoUsuarios.map((item, index) => {
									return (
										<tr key={index}>
											<td>{item.cedula}</td>
											<td>{item.nombre}</td>
											<td>{item.email}</td>
											<td>{item.rol}</td>
											{setEstado(item.estado)}
											<td>
												<a
													href='#'
													class='view'
													title='View'
													data-toggle='tooltip'>
													<i class='material-icons'>&#xE417;</i>
												</a>
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

export default usuarios;
