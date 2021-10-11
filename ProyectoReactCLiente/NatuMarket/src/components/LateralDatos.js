import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

const LateralDatos = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text',
	},
	{
		title: 'Ventas',
		path: '/ventas',
		icon: <FaIcons.FaStore />,
		cName: 'nav-text',
	},
	{
		title: 'Productos',
		path: '/productos',
		icon: <FaIcons.FaBox />,
		cName: 'nav-text',
	},
	{
		title: 'Usuarios',
		path: '/usuarios',
		icon: <RiIcons.RiContactsBook2Fill />,
		cName: 'nav-text',
	},
];

export default LateralDatos;
