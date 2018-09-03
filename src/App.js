import React, { Component } from 'react';
import './App.css';
import { aslAlphabet } from './data/alphabet';

import Vocabulary from './components/Vocabulary';

class App extends Component {
  render() {
    let section_name = aslAlphabet().name;
    let section_description = aslAlphabet().description;

    let section_vocabulary = aslAlphabet().vocabulary.map((item) =>
      <Vocabulary term={item.term} image={item.image} notes={item.notes} />
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ASL Study App</h1>
        </header>
        <h2>{section_name}</h2>
        <p>{section_description}</p>
        <div>{section_vocabulary}</div>
      </div>
    );
  }
}

export default App;
