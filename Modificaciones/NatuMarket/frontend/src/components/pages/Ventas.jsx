import React, {useState, useEffect} from 'react';
import axios from 'axios';

import TablaCustom from '../table/Tabla';
import DatosCabeceraVentas from '../data/DatosCabeceraVentas';
import {
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';

const Ventas = () => {
	const [ventas, setVentas] = useState([]);

	useEffect(async () => {
		let response = await axios.get(
			'http://localhost:4001/api/ventas/listar'
		);
		console.log(response.data[1]);
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

	const setUnidadProducto = (unidad) => {
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
		}
	};
	return (
		<TablaCustom>
			<TableHead>
				<TableRow>
					{DatosCabeceraVentas.map((item) => {
						return <TableCell>{item.nombre}</TableCell>;
					})}
				</TableRow>
			</TableHead>
			<TableBody>
				{ventas.map((venta) => {
					return (
						<TableRow>
							<TableCell>{venta.vendedor.nombre}</TableCell>
							<TableCell>{venta.cliente.nombre}</TableCell>
							<TableCell>{venta.producto.codigo}</TableCell>
							<TableCell>{venta.producto.descripcion}</TableCell>
							{setUnidadProducto(venta.producto.unidad)}
							<TableCell>{venta.producto.precio_venta}</TableCell>
							{/* <td>{venta.producto.unidad}</td> */}
							<TableCell>{venta.cantidad}</TableCell>
							{setVentasTotal(
								venta.producto.precio_venta,
								venta.cantidad
							)}
							{setEstado(venta.estado)}
							<TableCell>{venta._id}</TableCell>
							<TableCell>{venta.fecha}</TableCell>
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

export default Ventas;
