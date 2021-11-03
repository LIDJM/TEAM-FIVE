import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Background from '../../assets/img1log.png';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import notie from 'notie';
import 'notie/dist/notie.css';

const theme = createTheme();

export default function Login() {
	const auth = useAuth();
	//no Borrar
	const responseGoogle = async (respuesta) => {
		//console.log(respuesta);
		try {
			const {status, data} = await axios({
				method: 'POST',
				url: 'http://localhost:4001/api/google/login',
				headers: {
					Authorization: `Bearer ${respuesta.tokenId}`,
				},
			});
			console.log('status', status);
			console.log('data', data);

			if (status === 200) {
				auth.setToken(data.token);
				auth.setUser({uid: data.uid, name: data.name});
			} else if (status === 201) {
				notie.alert({text: data.msg, type: 'success', time: 10});
			}
		} catch (error) {
			if (error.response.status === 401) {
				notie.alert({
					text: error.response.data.msg,
					type: 'warning',
					time: 10,
				});
			} else {
				notie.alert({
					text: error.response.data.msg,
					type: 'error',
					time: 10,
				});
			}
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid container component='main' sx={{height: '100vh'}}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: `url(${Background})`,
						backgroundRepeat: 'no-repeat',
						backgroundColor: (t) =>
							t.palette.mode === 'light'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'contain',
						backgroundPosition: 'center',
					}}
				/>
				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					component={Paper}
					elevation={6}
					square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}>
						<Avatar sx={{m: 1, bgcolor: '#df491a'}}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Ingreso
						</Typography>
						<Box
							component='form'
							noValidate
							onSubmit={handleSubmit}
							sx={{mt: 1}}>
							<TextField
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								autoFocus
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
							/>
							<FormControlLabel
								control={
									<Checkbox value='remember' color='primary' />
								}
								label='Remember me'
							/>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{mt: 3, mb: 2}}>
								Ingresar
							</Button>
							<Grid container>
								<GoogleLogin
									clientId='552058111179-gqr5bk17o5oqd5d358r72pbhkr8fl278.apps.googleusercontent.com'
									buttonText='Login'
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									cookiePolicy={'single_host_origin'}
								/>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
