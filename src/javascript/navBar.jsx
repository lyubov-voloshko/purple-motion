import Logo from './logo.jsx'
import React from 'react';

class NaviagationBar extends React.Component {
    render() {
        return (<nav className="navigationBar">
            <Logo />
            <ul className="navigationMenu">
                <li className="navigationMenu__item"><a>home</a></li>
                <li className="navigationMenu__item"><a>works</a></li>
                <li className="navigationMenu__item"><a>press</a></li>
                <li className="navigationMenu__item"><a>contacts</a></li>
            </ul>
        </nav>)
    }
}

export default NaviagationBar;