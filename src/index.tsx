import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.sass';

import Provider from './context/Provider';
import App from './App';
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
