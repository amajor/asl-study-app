import React, { Component } from 'react';
import aslAlphabet from './data/alphabet';

import Vocabulary from './components/Vocabulary';
import SectionNavigation from './components/SectionNavigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: aslAlphabet(),
      currentItemIndex: 0,
      numberOfItems: aslAlphabet().vocabulary.length,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newIndex) {
    this.setState({ currentItemIndex: newIndex });
  }

  render() {
    const { currentSection, currentItemIndex } = this.state;
    const section_name = currentSection.name;
    const section_description = currentSection.description;

    const section_array = currentSection.vocabulary

    let current_item = section_array[currentItemIndex];

    return (
      <div className="container" style={{ padding: "20px" }}>
        <div className="row">
          <div className="col-sm">
            <h1>{section_name}</h1>
            <p>{section_description}</p>
            <SectionNavigation
              sectionArray={section_array}
              onButtonClick={this.handleClick}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Vocabulary
              term={current_item.term}
              image={current_item.image}
              notes={current_item.notes}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
