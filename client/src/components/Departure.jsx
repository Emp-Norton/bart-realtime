import React from 'react';

const Departure = (props) => {
	const timeTilDeparture = props.train.estimate[0].minutes;
	const destination = props.train.destination
	return (
		<div>
		{ (timeTilDeparture == "Leaving") ?
			<p> Towards <b>{destination}</b> is leaving <b>NOW</b></p>
		:
			<p>Towards <b>{destination}</b> in <span className="etdMinutes"><b>{timeTilDeparture}</b></span> minutes </p>
		}	
		</div>
	)
}

export default Departure;