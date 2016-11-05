import React, { Component } from 'react'

class Ticker extends Component {
	// initializes the state object
	constructor(props) {
		super(props);
		this.state = {timer: new Date()};
	}
	// this is called when the component is added to the DOM
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
  	}
  	// this is called when the component is removed from the DOM
	componentWillUnmount() {
		clearInterval(this.timerID)
  	}
  	// additional methods can be defined and used within the class
  	tick() {
  		this.setState({
  			timer: new Date()
  		});
  	}
	render() {
		return <div>{this.state.timer.toLocaleTimeString()}</div>
	}
}

export default Ticker