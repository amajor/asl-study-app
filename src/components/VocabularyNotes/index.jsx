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
    return notes.map((note) => (<p><em>{note}</em></p>));
  }

  renderButton() {
    const { notes } = this.props;
    const { showNotes } = this.state;
    if (notes === '') {
      return (
        <button
          className="btn btn-outline-danger btn-sm"
          style={{ marginBottom: "20px" }}
          disabled="disabled"
        >
          No Notes Available
        </button>
      );
    } else {
      return (
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
      );
    }
  }

  render() {
    const { showNotes } = this.state;
    return (
      <div className="alert alert-secondary" style={{ height: "100%" }} >
        <h1>Notes / Hints</h1>
        { this.renderButton() }
        <p>
          { showNotes
            ? this.renderNotes()
            : <em>Use button to toggle on notes and tips, when available.</em>
          }
        </p>
      </div>
    );
  }
}

VocabularyNotes.propTypes = {
  /** Notes or clues to help memorize the term. */
  notes: PropTypes.array,
};

VocabularyNotes.defaultProps = {
  notes: [],
};

export default VocabularyNotes;
