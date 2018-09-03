import React, { Component } from 'react';
import './App.css';

import Vocabulary from './Vocabulary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ASL Study App</h1>
        </header>
        <Vocabulary name="Test Term" />
      </div>
    );
  }
}

export default App;
