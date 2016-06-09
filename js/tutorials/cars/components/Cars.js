import React, { Component } from 'react';
import CarList from '../containers/CarList.js';
import CarDetail from '../containers/CarDetail.js';

class Cars extends Component {
    render() {
        return (
            <div>
                <CarList />
                <CarDetail />
            </div>
        );
    }
};

export default Cars;