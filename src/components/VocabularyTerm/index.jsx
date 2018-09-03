import React from 'react';
import PropTypes from 'prop-types';

class VocabularyTerm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTerm: false,
    };
    this.toggleShowTerm = this.toggleShowTerm.bind(this);
  }

  toggleShowTerm() {
    const { showTerm } = this.state;
    this.setState({ showTerm: !showTerm });
  }

  renderTerm() {
    const { term } = this.props;
    return <h1>{term}</h1>;
  }

  render() {
    const { showTerm } = this.state;
    return (
      <div className="text-center">
        <button
          className={ showTerm
            ? "btn btn-info btn-sm"
            : "btn btn-danger btn-sm"
          }
          onClick={this.toggleShowTerm}
          style={{ marginBottom: "20px" }}
        >
          { showTerm ? "Hide Answer" : "Show Answer" }
        </button>
        { showTerm
          ? this.renderTerm()
          : <h1 className="text-center">???</h1>
        }
      </div>
    );
  }
}

VocabularyTerm.propTypes = {
  /** The term or sentence that is being represented. */
  term: PropTypes.string,
};

VocabularyTerm.defaultProps = {
  term: 'No vocabulary term was provided.',
};

export default VocabularyTerm;
