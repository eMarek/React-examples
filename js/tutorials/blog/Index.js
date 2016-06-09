import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import reducers from './reducers';
import routes from './Routes.js';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

class Index extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Router history={appHistory} routes={routes} />
            </Provider>
        );
    }
};

export default Index;