import React from 'react';
import Departure from './Departure.jsx';

export default class DepatureList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
		this.setState({trains: this.props.departures});
	}

	render() {
		return (
			<div>
			{ this.state.trains ?
				<div>
					<h1>Departures from station</h1>
						{this.props.departures.map(function(train) {
							return (
									<p>Towards { train.destination } in { train.estimate[0].minutes} minutes </p>
								)
						})}
				</div>
				:
				<div>
				</div>
			}
			</div>
		)
	}
}