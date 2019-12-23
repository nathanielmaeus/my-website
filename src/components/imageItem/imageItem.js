import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Container } from './imageItem.css';

export default function ImageItem({ image, alt, width, className }) {
  return (
    <Container width={`${width}px`}>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={alt} />
    </Container>
  );
}

ImageItem.propTypes = {
  image: PropTypes.object,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  className: PropTypes.string,
};
