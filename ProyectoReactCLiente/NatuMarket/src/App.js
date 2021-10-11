import './App.css';
import BarraNavegacion from './components/BarraNavegacion';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import home from './pages/home';
import productos from './pages/productos';
import usuarios from './pages/usuarios';
import ventas from './pages/ventas';

function App() {
	return (
		<>
			<Router>
				<BarraNavegacion />
				<Switch>
					<Route path='/' exact component={home} />
					<Route path='/productos' component={productos} />
					<Route path='/usuarios' component={usuarios} />
					<Route path='/ventas' component={ventas} />
				</Switch>
			</Router>
		</>
	);
}

export default App;