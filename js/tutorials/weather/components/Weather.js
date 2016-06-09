import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar.js';
import WeatherList from '../containers/WeatherList.js';

class Weather extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
};

export default Weather;