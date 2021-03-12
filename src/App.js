import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './stylesheets/App.css';
import { Component } from 'react';


class App extends Component {
  render() {
  return (
    <Container fluid>
      <div className="header-wrapper">
        <Header/>
      </div>
      <div className="main-wrapper">
        <Main />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </Container>
  );
}
}

export default App;