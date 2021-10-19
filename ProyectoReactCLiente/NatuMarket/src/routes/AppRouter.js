import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Login from '../components/pages/Login';
import ContentRouter from './ContentRouter';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
import './App.css';

function AppRouter() {
	return (
		<Router>
			<>
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route path='/' component={ContentRouter} />
				</Switch>
			</>
		</Router>
	);
}

export default AppRouter;
