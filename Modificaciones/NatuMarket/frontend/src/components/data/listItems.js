import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';

const list = [
	{
		cuerpo: (
			<ListItem button>
				<ListItemIcon>
					<DashboardIcon sx={{color: '#df491a'}} />
				</ListItemIcon>
				<ListItemText primary='Home' />
			</ListItem>
		),
		path: '/',
	},
	{
		cuerpo: (
			<ListItem button>
				<ListItemIcon>
					<ShoppingCartIcon sx={{color: '#df491a'}} />
				</ListItemIcon>
				<ListItemText primary='Ventas' />
			</ListItem>
		),
		path: '/ventas',
	},
	{
		cuerpo: (
			<ListItem button>
				<ListItemIcon>
					<PeopleIcon sx={{color: '#df491a'}} />
				</ListItemIcon>
				<ListItemText primary='Usuarios' />
			</ListItem>
		),
		path: '/usuarios',
	},
	{
		cuerpo: (
			<ListItem button>
				<ListItemIcon>
					<InventoryIcon sx={{color: '#df491a'}} />
				</ListItemIcon>
				<ListItemText primary='Productos' />
			</ListItem>
		),
		path: '/productos',
	},
];

export {list};
