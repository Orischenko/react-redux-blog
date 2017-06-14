import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import store from './store';
import { Provider } from 'react-redux';

require('./sass/style.scss');

ReactDOM.render(
    <Provider store={ store }>
        <Posts/>
    </Provider>,
    document.getElementById('table')
);