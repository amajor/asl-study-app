import React from 'react';
import PropTypes from 'prop-types';

class VocabularyImage extends React.Component {
  render() {
    const { src, alt } = this.props;

    if(src !== '') {
      return (
        <img src={src} alt={alt} />
      );
    } else {
      return (
        <p>No image was provided</p>
      );
    }
  }
}

VocabularyImage.propTypes = {
  /** The image source url. */
  src: PropTypes.string,
  /** The alternate text for the image. */
  alt: PropTypes.string,
};

VocabularyImage.defaultProps = {
  src: '',
  alt: '',
};

export default VocabularyImage;
