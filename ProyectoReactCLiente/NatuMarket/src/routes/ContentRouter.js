import React from 'react';
import SideBar from '../components/Menu/SideBar';
import {Switch, Route, Redirect} from 'react-router-dom';
import home from '../components/pages/home';
import productos from '../components/pages/productos';
import Usuarios from '../components/pages/Usuarios';
import ventas from '../components/pages/ventas';
import registroUsuarios from '../components/pages/registroUsuarios';
import registroProductos from '../components/pages/registroProductos';

const ContentRouter = () => {
	return (
		<>
			<SideBar />
			<Switch>
				<Route path='/' exact component={home} />
				<Route path='/productos' exact component={productos} />
				<Route path='/Usuarios' exact component={Usuarios} />
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
				<Redirect to='/' />
			</Switch>
		</>
	);
};

export default ContentRouter;
