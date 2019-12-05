import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Container } from './imageItem.css';

export default function ImageItem({ image, width, className }) {
  return (
    <div className={className}>
      <Container width={`${width}px`}>
        <Img
          fluid={image ? image.childImageSharp.fluid : {}}
          alt={image.title}
        />
        <figcaption>{image.title}</figcaption>
      </Container>
    </div>
  );
}

ImageItem.propTypes = {
  image: PropTypes.object,
  width: PropTypes.number,
};
