import React from 'react';
import PropTypes from 'prop-types';
import VocabularyTerm from '../VocabularyTerm';
import VocabularyNotes from '../VocabularyNotes';
import VocabularyImage from '../VocabularyImage';

const Vocabulary = (props) => {
  const { term, image, notes } = props;

  return (
    <div
      className="row border border-dark rounded"
      style={{ margin: "20px 0", padding: "20px 5px 20px 5px" }}
    >
      <div className="col-sm">
        <VocabularyImage src={image} alt={term} />
        <div className="spacer" style={{ height: "40px" }} ></div>
        <VocabularyTerm term={term} />
      </div>
      <div className="col-sm-4">
        <VocabularyNotes notes={notes} />
      </div>
    </div>
  );
};

Vocabulary.propTypes = {
  /** The term or sentence that is being represented. */
  term: PropTypes.string.isRequired,
  /** The image or gif that shows the word. */
  image: PropTypes.string,
  /** Notes or clues to help memorize the term. */
  notes: PropTypes.string,
};

Vocabulary.defaultProps = {
  image: '',
  notes: [],
};

export default Vocabulary;
