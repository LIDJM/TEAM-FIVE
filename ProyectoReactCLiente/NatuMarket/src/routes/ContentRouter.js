import React from 'react';
import SideBar from '../components/Menu/SideBar';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from '../components/pages/Home';
import Productos from '../components/pages/Productos';
import Usuarios from '../components/pages/Usuarios';
import Ventas from '../components/pages/Ventas';
import RegistroProductos from '../components/pages/RegistroProductos';
import RegistroVentas from '../components/pages/RegistroVentas';
import CambiosUsuarios from '../components/pages/CambiosUsuarios';

const ContentRouter = () => {
	return (
		<>
			<SideBar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/productos' component={Productos} />
				<Route exact path='/Usuarios' component={Usuarios} />
				<Route exact path='/ventas' component={Ventas} />
				<Route
					exact
					path='/CambiosUsuarios'
					component={CambiosUsuarios}
				/>
				<Route
					exact
					path='/registroProductos'
					component={RegistroProductos}
				/>
				<Route
					path='/registroVentas'
					exact
					component={RegistroVentas}
				/>
				<Redirect to='/' />
			</Switch>
		</>
	);
};

export default ContentRouter;
