import React from 'react';
import Tabla from '../components/Tabla';
import DatosCabeceraProductos from '../Datos/DatosCabeceraProductos';
import DatosCuerpoProductos from '../Datos/DatosCuerpoProductos';

const productos = () => {
	const setEstado = (estado) => {
		if (estado === true) {
			return (
				<td>
					<span class='status text-success'>&bull;</span>
					Disponible
				</td>
			);
		} else if (estado === false) {
			return (
				<td>
					<span class='status text-warning'>&bull;</span>
					No Disponible
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
									{DatosCabeceraProductos.map((item, index) => {
										return <th key='{index}'>{item.nombre}</th>;
									})}
								</tr>
							</thead>
							<tbody>
								{DatosCuerpoProductos.map((item, index) => {
									return (
										<tr key={index}>
											<td>{item.categoria}</td>
											<td>{item.codigo}</td>
											<td>{item.descripcion}</td>
											<td>{item.imagen}</td>
											<td>{item.stock}</td>
											<td>{item.precio_compra}</td>
											<td>{item.precio_venta}</td>
											<td>{item.unidad_medida}</td>
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

export default productos;

// import React from 'react';
// import Tabla from '../components/Tabla';
// import DatosCabeceraProductos from '../Datos/DatosCabeceraProductos';

// const productos = () => {
	
	
	// return (
	// 	<div>
	// 		<h1>Productos</h1>
	// 		<Tabla
	// 			DatosCabecera={DatosCabeceraProductos.map((item, index) => {
	// 				return <th key='index'>{item.nombre}</th>;
	// 			})}
	// 		></Tabla>
	// 	</div>
	// );
// };

// export default productos;
