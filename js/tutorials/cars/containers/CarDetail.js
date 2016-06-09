import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarDetail extends Component {
    render() {
        if (!this.props.car) {
            return (
                <div>Select a car to get started.</div>
            );
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.car.title}</div>
                <div>Year: {this.props.car.year}</div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    // whatever is returned will show up as props inside of CarDetail
    return {
        car: state.activeCar
    };
}

export default connect(mapStateToProps)(CarDetail);