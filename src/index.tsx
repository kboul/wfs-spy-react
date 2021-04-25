import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';

import './index.sass';

import App from './App';

ReactDOM.render(
    <Router basename={`${process.env.PUBLIC_URL}/`}>
        <App />
    </Router>,
    document.getElementById('root')
);
