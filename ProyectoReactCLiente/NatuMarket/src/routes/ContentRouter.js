import React from 'react';
import SideBar from '../components/Menu/SideBar';
import {Switch, Route, Redirect} from 'react-router-dom';
import home from '../components/pages/home';
import productos from '../components/pages/productos';
import usuarios from '../components/pages/usuarios';
import ventas from '../components/pages/ventas';
import registroUsuarios from '../components/pages/registroUsuarios';
import registroProductos from '../components/pages/registroProductos';
import registroVentas from '../components/pages/registroVentas';

const ContentRouter = () => {
	return (
		<>
			<SideBar />
			<Switch>
				<Route path='/' exact component={home} />
				<Route path='/productos' exact component={productos} />
				<Route path='/usuarios' exact component={usuarios} />
				<Route path='/ventas' exact component={ventas} />
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
