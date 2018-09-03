import React from 'react';
import PropTypes from 'prop-types';

class SectionNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItemIndex: 0,
      numberOfItems: props.sectionArray.length,
    };
    this.getNextItemIndex = this.getNextItemIndex.bind(this);
    this.getPreviousItemIndex = this.getPreviousItemIndex.bind(this);
    this.getRandomItemIndex = this.getRandomItemIndex.bind(this);
  }

  getNextItemIndex() {
    const { currentItemIndex } = this.state;
    this.setState({ currentItemIndex: currentItemIndex + 1 });
  }

  getPreviousItemIndex() {
    const { currentItemIndex } = this.state;
    this.setState({ currentItemIndex: currentItemIndex - 1 });
  }

  getRandomItemIndex() {
    const { currentItemIndex, numberOfItems } = this.state;
    let newIndex = Math.floor(Math.random() * ( numberOfItems ));
    this.setState({ currentItemIndex: newIndex });
  }

  render() {
    const { currentItemIndex, numberOfItems } = this.state;

    return (
      <p>
        <button
          className="btn btn-success btn-sm mr-3"
          onClick={this.getRandomItemIndex}
        >
          Random
        </button>
        <button
          className="btn btn-primary btn-sm mr-3"
          onClick={this.getPreviousItemIndex}
          disabled={ currentItemIndex === 0 ? "disabled" : "" }
        >
          Previous
        </button>
        <button
          className="btn btn-primary btn-sm mr-3"
          onClick={this.getNextItemIndex}
          disabled={ currentItemIndex + 1 === numberOfItems ? "disabled" : "" }
        >
          Next
        </button>
        <span>
          <em>{currentItemIndex + 1} of {numberOfItems}</em>
        </span>
      </p>
    );
  }
}

SectionNavigation.propTypes = {
  /** The array of items for this section. */
  sectionArray: PropTypes.array.isRequired,
};

export default SectionNavigation;
