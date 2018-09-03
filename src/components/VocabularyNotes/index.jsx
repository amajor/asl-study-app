import React from 'react';
import PropTypes from 'prop-types';

class VocabularyNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotes: false,
    };
    this.toggleShowNotes = this.toggleShowNotes.bind(this);
  }

  toggleShowNotes() {
    const { showNotes } = this.state;
    this.setState({ showNotes: !showNotes });
  }

  renderNotes() {
    const { notes } = this.props;
    return <p><em>{notes}</em></p>;
  }

  render() {
    const { showNotes } = this.state;
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={this.toggleShowNotes}
        onKeyPress={this.toggleShowNotes}
      >
        { showNotes ? this.renderNotes() : <p><em>Click to Reveal</em></p> }
      </div>
    );
  }
}

VocabularyNotes.propTypes = {
  /** Notes or clues to help memorize the term. */
  notes: PropTypes.string,
};

VocabularyNotes.defaultProps = {
  notes: 'No notes are available for this term.',
};

export default VocabularyNotes;
