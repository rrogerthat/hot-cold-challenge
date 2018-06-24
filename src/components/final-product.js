import React from 'react';
import GuessForm from './form';
import Output from './output';
import Measurement from './measurement';

import './final-product.css';

export default class FinalProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			singleNum: '',	//so setTemp() compares individual guessed number instead of the array
			oneGuess: [],
			randomNum: Math.floor(Math.random() * 100 + 1),	//Don't need {} to represent JS code here ( only in return() )
			temperature: ''
		}
	}

	storeNum(num) {
		if (this.state.oneGuess.find(item => item === num)) {
			this.setState({temperature: 'You guessed this number already'});
		} else {this.setState({
			oneGuess: [...this.state.oneGuess, num]
			});

			this.setState({
				singleNum: num
			}, () => {this.setTemp()}); //callback ran after setState to display how close your guess is
		}
	}

	setTemp() {
		if (Math.abs(this.state.singleNum - this.state.randomNum) === 0) {
			this.setState({temperature: 'CORRECT! Click New Game to play again'});
		}else if (Math.abs(this.state.singleNum - this.state.randomNum) <= 10) {
			this.setState({temperature: 'Very hot'});
		} else if (Math.abs(this.state.singleNum - this.state.randomNum) <= 20) {
			this.setState({temperature: 'hot'});
		} else if (Math.abs(this.state.singleNum - this.state.randomNum) <= 30) {
			this.setState({temperature: 'warm'});
		} else if (Math.abs(this.state.singleNum - this.state.randomNum) <= 50) {
			this.setState({temperature: 'slightly warm'});
		} else {
			this.setState({temperature: 'cold'});
		}
	}

	render() {
		console.log(this.state.randomNum);
		console.log(`Diff is ${Math.abs(this.state.singleNum - this.state.randomNum)}`);

		const nums = this.state.oneGuess.map((num, index) => 
			<span key={index}><span className="eachGuess">{num}</span></span>
		);

		return (
			<div className="container">
				<h1>HOT OR COLD</h1>
				<Measurement value={this.state.temperature} />
				<GuessForm 
				toGuess={num => this.storeNum(num)} 
				counter={`Guess # ${this.state.oneGuess.length}!`} />
				<Output id="guessed-number" value={nums} />
			</div>
		)
	}

}
