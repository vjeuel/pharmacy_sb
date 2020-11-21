import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';

function App() {
	return (
		<Router>
			<div className='App'>
				{/* <Navbar /> */}
				<Switch>
					<Route path='/' exact component={withRouter(Home)} />
					<Route path='/privacy' component={withRouter(Privacy)} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
