import React from 'react';
import PropTypes from 'prop-types';
import VocabularyTerm from '../VocabularyTerm';
import VocabularyNotes from '../VocabularyNotes';

const Vocabulary = (props) => {
  const { term, image, notes } = props;

  return (
    <div>
      <img src={image} alt={term} />
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
  image: 'https://s3.amazonaws.com/magoosh-company-site/wp-content/uploads/hs/files/2016/06/05142353/homer-studying.gif',
  notes: 'Hints about signing the letter A',
};

export default Vocabulary;
