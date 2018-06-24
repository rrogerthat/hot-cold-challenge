import React from 'react';

export default function Output(props) {
	return (
		<div className="container">
			<label htmlFor={props.id}>{props.label}</label>
			<output id={props.id}>
				{props.value}
			</output>
		</div>
	)
}