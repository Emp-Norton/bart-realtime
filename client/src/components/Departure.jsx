import React from 'react';

const Departure = (props) => {

	return (
		<div>
			<p> { this.props.train.destination} - { this.props.train.estimate[0].minutes} </p>
		</div>
		)
}

export default Departure;