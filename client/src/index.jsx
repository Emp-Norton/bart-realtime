import React from 'react';
import ReactDOM from 'react-dom';
import DepartureList from './components/DepartureList.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectorValue: "Please select a station",
      stations: {
        "12th St. Oakland City Center": "12th",
        "16th St. Mission (SF)": "16th",
        "19th St. Oakland": "19th",
        "24th St. Mission (SF)": "24th",
        "Ashby (Berkeley)": "ashb",
        "Balboa Park (SF)": "balb",
        "Bay Fair (San Leandro)": "bayf",
        "Castro Valley": "cast",
        "Civic Center (SF)": "civc",
        "Coliseum": "cols",
        "Colma": "colm",
        "Concord": "conc",
        "Daly City": "daly",
        "Downtown Berkeley": "dbrk",
        "Dublin/Pleasanton": "dubl",
        "El Cerrito del Norte": "deln",
        "El Cerrito Plaza": "plza",
        "Embarcadero (SF)": "embr",
        "Fremont": "frmt",
        "Fruitvale (Oakland)": "ftvl",
        "Glen Park (SF)": "glen",
        "Hayward": "hayw",
        "Lafayette": "lafy",
        "Lake Merritt (Oakland)": "lake",
        "MacArthur (Oakland)": "mcar",
        "Millbrae": "mlbr",
        "Montgomery St. (SF)": "mont",
        "North Berkeley": "nbrk",
        "North Concord/Martinez": "ncon",
        "Oakland Int'l Airport": "oakl",
        "Orinda": "orin",
        "Pittsburg/Bay Point": "pitt",
        "Pleasant Hill": "phil",
        "Powell St. (SF)": "powl",
        "Richmond": "rich",
        "Rockridge (Oakland)": "rock",
        "San Bruno": "sbrn",
        "San Francisco Int'l Airport": "sfia",
        "San Leandro": "sanl",
        "South Hayward": "shay",
        "South San Francisco": "ssan",
        "Union City": "ucty",
        "Warm Springs/South Fremont": "warm",
        "Walnut Creek": "wcrk",
        "West Dublin": "wdub",
        "West Oakland": "woak"
      }
    }
    this.selectChange = this.selectChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.determineUserAgent();
  }

  getData(origin) {
    origin = this.state.stations[origin];
    let app = this;   
    $.ajax({
      type: 'GET',
      url: `/api/${origin}`, 
      success: function(data) {
        app.setState({departureData: data})
      }, 
      failure: function(err) {
        console.log(err)
      }
    })
  }

  selectChange(e) {
    let newValue = e.target.value;
    this.state.selectorValue = newValue;
    this.getData(newValue);
    
  }

  handleClick(e) {
    let quickSelectStation = e.target.id;
    this.state.selectorValue = quickSelectStation;
    this.getData(quickSelectStation);
  }

  determineUserAgent() {
    let device = navigator.userAgent;
    alert(device);
  }

  render() {
    let app = this;
    let stationNames = Object.keys(this.state.stations);
    return (
      <div>
        <div className="contentContainer">
          <div className="panel">
            <h1>Bart Train Finder</h1>
            <div className="map-panel">
            <img src="/images/bart-system-map.png"/>
          </div>
          <div className="button-container">
            <button className="originStation" id="Powell St. (SF)" onClick={this.handleClick}> Powell </button>
            <button className="originStation" id="Hayward" onClick={this.handleClick}> Hayward </button>
            <br/>
            <select className="stationSelector" value={this.state.selectorValue} onChange={this.selectChange}>
              { stationNames.map(function(station){
                  return (<option> {station}</option>)
                })
              }
            </select>
          </div>
        </div>
        { this.state.departureData ?
            <div className="results">
              <DepartureList station={this.state.departureData.root.station[0].name} departures={this.state.departureData.root.station[0].etd}/>
                
            </div>
            :
            <div>
            <h1> Please select a station for departure data </h1>
            </div>
          } 
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

  