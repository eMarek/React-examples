import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCar } from '../actions/Index.js';

class CarList extends Component {
    renderList() {
        return this.props.cars.map((car) => {
            return (
                <li key={car.title} className="list-group-item" onClick={() => this.props.selectCar(car)}>{car.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
};

function mapStateToProps(state) {
    // whatever is returned will show up as props inside of CarList
    return {
        cars: state.cars
    };
}

// anything returned from this function wll end up as props on the CarList container
function mapDispatchToProps(dispatch) {
    // whenever selectCar is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectCar: selectCar }, dispatch);
}

// promote CarList from a component to a container
// it need to know about the new dispatch method, selectCar
// make it avilalbe as prop
export default connect(mapStateToProps, mapDispatchToProps)(CarList);