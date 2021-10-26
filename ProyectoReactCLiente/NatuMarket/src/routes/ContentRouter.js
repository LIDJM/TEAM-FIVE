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
import FiltrarVentasCcNit from '../components/pages/FiltrarVentasCcNit';

const ContentRouter = () => {
	return (
		<>
			<SideBar />
			<Switch>
				<Route exact path='/' component={home} />
				<Route exact path='/productos' component={Productos} />
				<Route exact path='/Usuarios' component={Usuarios} />
				<Route exact path='/ventas' component={Ventas} />
				<Route exact path= '/ventas/filtrar/nit_cc_cliente/:cliente_id' component = {FiltrarVentasCcNit } />

				filtrar/nit_cc_cliente/:cliente_id
				<Route
					exact path ='/registroUsuarios'
					component={registroUsuarios}
				/>
				<Route
					exact path='/registroProductos'
					component={registroProductos}
				/>
				<Route
					exact path='/registroVentas'
					component={registroVentas}
				/>
				<Redirect to='/' />
			</Switch>
		</>
	);
};

export default ContentRouter;
