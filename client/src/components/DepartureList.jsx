import React from 'react';
import Departure from './Departure.jsx';

const DepartureList = (props) => {

		return (
			<div>
				<div>
					<h1>Departures from {props.station}</h1>
						{props.departures.map(function(train) {
							return (
									<p>Towards { train.destination } in { train.estimate[0].minutes} minutes </p>
								)
						})}
				</div>
				<div>
				</div>
			</div>
		)
}

export default DepartureList;