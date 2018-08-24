import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { connect } from 'react-redux'

const API = "http://localhost:3000/sushis"

class App extends Component {

	state = {
		sushis: [],
		eaten: [],
		cost: 0,
		budget: 100,
		display: 0,
	}

	componentDidMount(){
		fetch(API)
		.then(res => res.json())
		.then((res) => {
			this.setState({
				sushis: res
			})
		})
	}

	// eat = (sushi) => {
	// 	const newCost = this.state.cost + sushi.price

	// 	if (!this.state.eaten.includes(sushi) && newCost <= this.state.budget ) {
	// 		this.setState({
	// 			eaten: [...this.state.eaten, sushi],
	// 			cost: newCost
	// 		})
	// 	}
	// }

	chooseFourSushis = () => {
		return this.state.sushis.slice(this.state.display, this.state.display+4)
	}

	more = (event) => {
		this.setState({
			display: this.state.display + 4
		})
	}

	render() {
		console.log("APP PROPS", this.props)
		return (
			<div className="app">
				<SushiContainer sushis={this.chooseFourSushis()} 
												more={this.more}
												eaten={this.props.eatenREDUX} />
				<Table remainingBudget={this.state.budget - this.state.cost} 
							 />
			</div>
		);
	}
}

	// state = {
	// 	sushis: [],
	// 	eaten: [],
	// 	cost: 0,
	// 	budget: 100,
	// 	display: 0,
	// }

const mapStateToProps = (state) => {
	console.log("APP MSP", state)
	return {
		sushis: state.sushis,
		eatenREDUX: state.eaten,
		cost: state.cost,
		budget: state.budget,
		display: state.display,
	}
}



export default connect(mapStateToProps)(App);
