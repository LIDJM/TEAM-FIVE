import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Login from '../components/pages/Login';
import ContentRoute from './ContentRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function AppRouter() {
	return (
		<Router>
			<>
				<Switch>
					<PublicRoute exact path='/login' component={Login} />
					<PrivateRoute path='/' component={ContentRoute} />
				</Switch>
			</>
		</Router>
	);
}

export default AppRouter;
