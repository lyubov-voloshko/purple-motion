/**
 * Created by macbook11 on 10/12/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('mount')
    );
});
