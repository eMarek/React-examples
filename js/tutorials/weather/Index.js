import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import Weather from './components/Weather.js';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Index extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Weather />
            </Provider>
        );
    }
};

export default Index;