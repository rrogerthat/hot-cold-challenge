import React from 'react';
import './form.css';

export default class GuessForm extends React.Component {

	onSubmit (event) {
		event.preventDefault();
		const num = this.numInput.value.trim();
		if (num && this.props.toGuess) {
			this.props.toGuess(num);	
		}
		this.numInput.value='';
	}

	render () {
		return (
		<div>
		<button className="newGame" onClick={() => window.location.reload()}>{`+NEW GAME`}</button>
		<form onSubmit={(e) => this.onSubmit(e)}>
			<input type="number" ref={input => this.numInput = input} min={1} max={100} placeholder="Enter Your Guess" required/>
			<button>Guess</button>
		</form>
		<div>{this.props.counter}</div>
		</div>
		)	
	}
}