import React, {useEffect, useState} from 'react';
import DatosCabeceraProductos from '../data/DatosCabeceraProductos';
import axios from 'axios';
import TablaCustom from '../table/Tabla';
import {
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';

const Productos = () => {
	const [data, setData] = useState([]);

	const peticionGet = async () => {
		await axios
			.get('http://localhost:4001/api/productos/listar')
			.then((response) => {
				console.log(response.data);
				setData(response.data);
			});
	};
	console.log(data);
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
		<TablaCustom>
			<TableHead>
				<TableRow>
					{DatosCabeceraProductos.map((item) => {
						return <TableCell>{item.nombre}</TableCell>;
					})}
				</TableRow>
			</TableHead>
			<TableBody>
				{data.map((producto) => {
					return (
						<TableRow>
							<TableCell>{producto.categoria.nombre}</TableCell>
							<TableCell>{producto.codigo}</TableCell>
							<TableCell>{producto.descripcion}</TableCell>
							<TableCell>{producto.imagen}</TableCell>
							<TableCell>{producto.stock}</TableCell>
							<TableCell>{producto.precio_compra}</TableCell>
							<TableCell>{producto.precio_venta}</TableCell>
							<TableCell>{producto.unidad.nombre}</TableCell>
							{setEstado(producto.estado)}
							<TableCell>
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
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</TablaCustom>
	);
};

export default Productos;
