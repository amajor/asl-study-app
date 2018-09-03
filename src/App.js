import React, { Component } from 'react';
import aslAlphabet from './data/alphabet';

import Vocabulary from './components/Vocabulary';

class App extends Component {
  render() {
    let section_name = aslAlphabet().name;
    let section_description = aslAlphabet().description;

    let section_vocabulary = aslAlphabet().vocabulary.map((item) =>
      <Vocabulary term={item.term} image={item.image} notes={item.notes} />
    );

    return (
      <div className="container" style={{ padding: "20px" }}>
        <div className="row">
          <div className="col-sm">
            <h1>{section_name}</h1>
            <p>{section_description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            {section_vocabulary}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
