import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GrandParentComponent from './components/GrandParentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GrandParentComponent />
      </div>
    );
  }
}

export default App;
