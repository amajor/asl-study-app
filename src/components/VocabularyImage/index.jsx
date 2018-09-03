import React from 'react';
import PropTypes from 'prop-types';

class VocabularyImage extends React.Component {
  render() {
    const { src, alt } = this.props;

    if(src !== '') {
      return (
        <img
          className="img-fluid rounded mx-auto d-block"
          src={src}
          alt={alt}
        />
      );
    } else {
      return (
        <p className="text-center">No image was provided</p>
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
