import logo from './logo.svg';
import React from 'react';

function Header(){
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Hello world
        </p>
        </header>
    );
}

export default Header;