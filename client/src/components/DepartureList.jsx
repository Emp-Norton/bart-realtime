import React from 'react';
import Departure from './Departure.jsx';

const DepartureList = (props) => {

		return (
			<div>
				<div className="departuresContainer">
					<h1>Departures from {props.station} </h1>
						{props.departures.map(function(train) {
							return (
									<Departure train={train} />
								)
						})}
				</div>
			</div>
		)
}

export default DepartureList;