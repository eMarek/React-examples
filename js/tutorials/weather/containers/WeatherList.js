import React, { Component } from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import Chart from '../components/Chart.js';
import GoogleMap from '../components/GoogleMap.js';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td style={{ width: '182px', height: '144px' }}><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="orange" units="C" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="input-group">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temeprature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    // const weather = state.weather;
    return { weather };
    // { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
