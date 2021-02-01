import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="app-wrapper">
      <div className="content-wrapper">
      <Header/>
      <Main />
      </div>
    </div>
  );
}

export default App;