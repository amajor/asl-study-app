import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Vocabulary from '../Vocabulary';
import SectionNavigation from '..//SectionNavigation';

class Section extends Component {
  constructor(props) {
    super(props);
    const section = props.section;
    const vocabularyArray = props.section.vocabulary;

    this.state = {
      sectionName: section.name,
      sectionDescription: section.description,
      sectionVocabulary: vocabularyArray,
      currentItemIndex: 0,
      numberOfItems: vocabularyArray.length,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newIndex) {
    this.setState({ currentItemIndex: newIndex });
  }

  render() {
    const {
      sectionName,
      sectionDescription,
      sectionVocabulary,
      currentItemIndex
    } = this.state;
    let currentItem = sectionVocabulary[currentItemIndex];

    return (
      <div className="container" style={{ padding: "20px" }}>
        <div className="row">
          <div className="col-sm">
            <h1>{sectionName}</h1>
            <p>{sectionDescription}</p>
            <SectionNavigation
              sectionArray={sectionVocabulary}
              onButtonClick={this.handleClick}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Vocabulary
              term={currentItem.term}
              image={currentItem.image}
              notes={currentItem.notes}
            />
          </div>
        </div>
      </div>
    );
  }
}

SectionNavigation.propTypes = {
  /** The section object containing name, description, array of vocab, etc. */
  section: PropTypes.object.isRequired,
};

export default Section;
