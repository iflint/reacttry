// React related
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
// stylesheets
import Stylesheet from './style.scss'
// components
import Ticker from './components/ticker.js';

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Home} />
				<Route path='/address' component={Address} />
				<Route path='*' component={NotFound} />
			</Router>
		)
	}
}

const NotFound = () => (
	<h1>404 - Page not found</h1>
)
const Home = () => (
	<div>
		<h1>Home</h1>
		<Ticker />
		<Ticker />
	</div>
)
const Address = () => (
	<p>slkdfj</p>
)



export default App