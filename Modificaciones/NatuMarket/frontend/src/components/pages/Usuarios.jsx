import axios from 'axios';
import React, {useEffect, useState} from 'react';

import TablaCustom from '../table/Tabla';
import DatosCabeceraUsuarios from '../data/DatosCabeceraUsuarios';
import {
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';

const Usuarios = () => {
	const [usuarios, setUsuarios] = useState([]);

	useEffect(async () => {
		let response = await axios.get(
			'http://localhost:4001/api/usuarios/Show'
		);

		setUsuarios(response.data);
	}, []);
	console.log(DatosCabeceraUsuarios);
	console.log(usuarios);
	const setEstado = (estado) => {
		if (estado === 'autorizado') {
			return (
				<TableCell>
					<span class='status text-success'>&bull;</span>
					Autorizado
				</TableCell>
			);
		} else if (estado === 'pendiente') {
			return (
				<TableCell>
					<span class='status text-warning'>&bull;</span>
					Pendiente
				</TableCell>
			);
		} else if (estado === 'no autorizado') {
			return (
				<TableCell>
					<span class='status text-danger'>&bull;</span>
					No Autorizado
				</TableCell>
			);
		}
	};
	return (
		<TablaCustom>
			<TableHead>
				<TableRow>
					{DatosCabeceraUsuarios.map((item) => {
						return <TableCell>{item.nombre}</TableCell>;
					})}
				</TableRow>
			</TableHead>
			<TableBody>
				{usuarios.map((item) => {
					return (
						<TableRow>
							<TableCell>{item.cedula}</TableCell>
							<TableCell>{item.nombre}</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>{item.rol}</TableCell>
							{setEstado(item.estado.nombre)}
							<TableCell>
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
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</TablaCustom>
	);
};

export default Usuarios;
