import React from 'react';
import PropTypes from 'prop-types';
import VocabularyTerm from '../VocabularyTerm';
import VocabularyNotes from '../VocabularyNotes';
import VocabularyImage from '../VocabularyImage';

const Vocabulary = (props) => {
  const { term, image, notes } = props;

  return (
    <div>
      <VocabularyImage src={image} alt={term} />
      <VocabularyTerm term={term} />
      <VocabularyNotes notes={notes} />
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
  notes: 'Hints about signing the letter A',
};

export default Vocabulary;
