/**
 * Created by macbook11 on 10/12/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById('App')
    );
});
