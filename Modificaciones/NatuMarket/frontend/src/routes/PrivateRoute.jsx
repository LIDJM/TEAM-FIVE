import React from 'react';
import {Redirect, Route} from 'react-router';
import useAuth from '../hooks/useAuth';

// const user = null;
// const user = {id: 1, username: 'Jhonny', email: 'algo'};

const PrivateRoute = ({component: Component, ...rest}) => {
	const auth = useAuth();

	return (
		// <Route {...rest}>
		// 	{user ? <Component /> : <Redirect to='/login' />}
		// </Route>
		<Route {...rest}>
			{auth.isLogged() ? <Component /> : <Redirect to='/login' />}
		</Route>
	);
};

export default PrivateRoute;
