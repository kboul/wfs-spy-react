import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';

import './index.sass';

import App from './App';
import Provider from './context/Provider';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Provider>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
