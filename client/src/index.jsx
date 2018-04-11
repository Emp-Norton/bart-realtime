import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData(origin, dest) {
    origin = origin || 'powl';
    let app = this;   
    $.ajax({
      type: 'GET',
      url: '/api',
      success: function(data) {
        app.setState({departureData: data})
      }, 
      failure: function(err) {
        console.log(err)
      }
    })
  }

  render() {
    return (
      <div>
        <div className="panel">
          <h1>Bart Train Finder</h1>
          <div className="map-panel">
          <img src="/images/bart-system-map.png"/>
        </div>
        <div className="button-container">
          <button className="originStation"> Powell </button>
          <button className="originStation"> Hayward </button>
        </div>
      </div>
      { !this.state.departureData ? null
      :
        <div class="results">
          {this.state.departureData.root.station[0].etd.map(function(departure) {
            let colorToUse = departure.estimate[0].color;
            if (colorToUse === "YELLOW") colorToUse = '#FF8C00'
            let styles = {"color": colorToUse}
            return (<p style={styles}><b> 
              {departure.destination} - {departure.estimate[0].minutes} minutes
              </b></p>)
            }
          )}
        </div>
      } 
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

  