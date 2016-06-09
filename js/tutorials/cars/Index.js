import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Cars from './components/Cars.js';
import reducers from './reducers';

class Index extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Cars />
            </Provider>
        );
    }
};

export default Index;