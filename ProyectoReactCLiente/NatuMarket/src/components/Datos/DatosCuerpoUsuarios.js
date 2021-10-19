import axios from 'axios';
const mostrar = async () => {
	const response = await axios.get(
		'http://localhost:4001/api/usuarios/Show'
	);
	console.log(response);
};
const DatosCuerpoUsuarios = [
	{
		cedula: '1234567',
		nombre: 'Cualquiera Perez',
		email: 'Cualquiera@gmail.com',
		rol: 'Administrador',
		estado: 'autorizado',
	},
	{
		cedula: '1234567',
		nombre: 'Cualquiera Perez',
		email: 'Cualquiera@gmail.com',
		rol: 'Administrador',
		estado: 'pendiente',
	},
	{
		cedula: '1234567',
		nombre: 'Cualquiera Perez',
		email: 'Cualquiera@gmail.com',
		rol: 'Administrador',
		estado: 'no autorizado',
	},
	{
		cedula: '1234567',
		nombre: 'Cualquiera Perez',
		email: 'Cualquiera@gmail.com',
		rol: 'Administrador',
		estado: 'autorizado',
	},
];

export {DatosCuerpoUsuarios, mostrar};
