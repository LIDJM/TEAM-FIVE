import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import {Login} from '../components/pages/Login';
import ContentRouter from './ContentRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import './App.css';

function AppRouter() {
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute exact path='/login' component={Login} />
					<PrivateRoute path='/' component={ContentRouter} />
				</Switch>
			</div>
		</Router>
	);
}

export default AppRouter;
