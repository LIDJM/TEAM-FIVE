import React from 'react';
import Tabla from '../components/Tabla';
import DatosCabeceraUsuarios from '../Datos/DatosCabeceraUsuarios';

const usuarios = () => {
	return (
		<>
			<div>
				<h1>Usuarios</h1>
				<Tabla
					DatosCabecera={DatosCabeceraUsuarios.map((item, index) => {
						return <th key='{index}'>{item.nombre}</th>;
					})}
					DatosCuerpo={cualquiera.map((item, index) => {
						return <th key='{index}'>{item.dato}</th>;
					})}
				/>
			</div>
		</>
	);
};

export default usuarios;
