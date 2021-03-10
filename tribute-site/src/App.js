import './stylesheets/App.css';
import Header from './components/Header.js'
import { Component } from 'react';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
}

export default App;
