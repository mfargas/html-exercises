
import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './stylesheets/App.css';
import Header from './components/Header.js'
import { Component } from 'react';


class App extends Component {
  render() {
  return (
    <div className="top-parent-container">
      <div className="header-wrapper">
      <Header/>
      </div>
      <div className="main-wrapper">
        <Main />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}
}

export default App;