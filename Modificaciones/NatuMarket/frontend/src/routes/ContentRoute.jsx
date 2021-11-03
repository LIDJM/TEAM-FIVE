import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Menu from '../components/menu/Menu';
import Home from '../components/pages/Home';
import Productos from '../components/pages/Productos';
import Usuarios from '../components/pages/Usuarios';
import Ventas from '../components/pages/Ventas';

const ContentRoute = () => {
	return (
		<>
			<Menu>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/productos' component={Productos} />
					<Route exact path='/usuarios' component={Usuarios} />
					<Route exact path='/ventas' component={Ventas} />
					<Redirect to='/' />
				</Switch>
			</Menu>
		</>
	);
};

export default ContentRoute;
