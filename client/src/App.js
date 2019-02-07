import React, { Component } from 'react';
import './resources/styles.css';
import './styles/servicestyles.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Quote from './components/Quote/Quote';
import feedback from './components/Feedback';
import Footers from './components/Footers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div>
						<Header className="navbar-fixed-top" />
					</div>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/services" component={Services} />
					<Route exact path="/freequote" component={Quote} />
					<Route exact path="/feedback" component={feedback} />

					<div>
						<Footers />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
