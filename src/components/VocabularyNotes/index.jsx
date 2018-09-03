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
      <div className="alert alert-secondary" style={{ height: "100%" }} >
        <h1>Notes / Hints</h1>
        <button
          className={ showNotes
            ? "btn btn-outline-info btn-sm"
            : "btn btn-outline-danger btn-sm"
          }
          onClick={this.toggleShowNotes}
          style={{ marginBottom: "20px" }}
        >
          { showNotes ? "Hide Notes" : "Show Notes" }
        </button>
        { showNotes
          ? this.renderNotes()
          : <p><em>Use button to toggle on notes.</em></p>
        }
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
