import React from 'react';
import {Redirect, Route} from 'react-router';
import useAuth from '../hooks/useAuth';

const PublicRoute = ({component: Component, ...rest}) => {
	const auth = useAuth();

	return (
		<Route {...rest}>
			{!auth.isLogged() ? <Component /> : <Redirect to='/' />}
		</Route>
	);
};

export default PublicRoute;
