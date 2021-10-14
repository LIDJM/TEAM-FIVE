import React from 'react';
import Tabla from '../components/Tabla';
import DatosCabeceraUsuarios from '../Datos/DatosCabeceraUsuarios';
import DatosCuerpoUsuarios from '../Datos/DatosCuerpoUsuarios';

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

	return (
		<>
			<div className='page_content'>
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
