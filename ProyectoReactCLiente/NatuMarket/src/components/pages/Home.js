import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
const Home = () => {
	const responseGoogle = (resp) => {
		console.log(resp);
	};
	return (
		<div className='home'>
			<h1>Home</h1>
		</div>
	);
};

export default Home;
