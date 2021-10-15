import React from 'react';
import Tabla from '../components/Tabla';
import DatosCabeceraProductos from '../Datos/DatosCabeceraProductos';

const productos = () => {
	return (
		<div>
			<h1>Productos</h1>
			<Tabla
				DatosCabecera={DatosCabeceraProductos.map((item, index) => {
					return <th key='index'>{item.nombre}</th>;
				})}
			></Tabla>
		</div>
	);
};

export default productos;
