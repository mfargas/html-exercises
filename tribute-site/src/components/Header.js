import logo from './logo.svg';
import React, {Component} from 'react';

export default class Header extends Component {
    render() {
    return(
        <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Hello world!
            </p>
        </header>
        </div>
    )
    }
}

export default Header;
