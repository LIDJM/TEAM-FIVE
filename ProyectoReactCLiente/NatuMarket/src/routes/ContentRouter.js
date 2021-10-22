import React from 'react';
import SideBar from '../components/Menu/SideBar';
import {Switch, Route, Redirect} from 'react-router-dom';
import home from '../components/pages/home';
import Productos from '../components/pages/Productos';
import Usuarios from '../components/pages/Usuarios';
import Ventas from '../components/pages/Ventas';
import registroUsuarios from '../components/pages/registroUsuarios';
import registroProductos from '../components/pages/registroProductos';
import registroVentas from '../components/pages/registroVentas';

const ContentRouter = () => {
	return (
		<>
			<SideBar />
			<Switch>
				<Route path='/' exact component={home} />

				<Route path='/productos' exact component={Productos} />
				<Route path='/Usuarios' exact component={Usuarios} />
				<Route path='/ventas' exact component={Ventas} />
				<Route
					path='/registroUsuarios'
					exact
					component={registroUsuarios}
				/>
				<Route
					path='/registroProductos'
					exact
					component={registroProductos}
				/>
				<Route
					path='/registroVentas'
					exact
					component={registroVentas}
				/>
				<Redirect to='/' />
			</Switch>
		</>
	);
};

export default ContentRouter;
