import React, { Component } from 'react';
import aslAlphabet from './data/alphabet';
import aslNumbers from './data/numbers';

import Vocabulary from './components/Vocabulary';
import SectionNavigation from './components/SectionNavigation';

class App extends Component {
  constructor(props) {
    super(props);
    const alphabetArray = aslAlphabet().vocabulary;
    const numberArray = aslNumbers().vocabulary;
    const allTermsArray = numberArray.concat(alphabetArray);

    this.state = {
      currentSection: {
        name: "All Items",
        description: "All items shuffled together. Currently includes the alphabet and numbers.",
        vocabulary: allTermsArray,
      },
      currentItemIndex: 0,
      numberOfItems: allTermsArray.length,
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
