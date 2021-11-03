import AppRoute from './routes/AppRoute';
import AuthProvider from './Providers/AuthProvider';

function App() {
	return (
		<>
			<AuthProvider>
				<AppRoute />
			</AuthProvider>
		</>
	);
}

export default App;
