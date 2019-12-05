import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from '../../imageItem/imageItem';
import { Container } from './project.css';

function Project({ item: { image, title, desc } }) {
  return (
    <Container>
      <ImageItem className="preview" image={image} />
      <h5>{title}</h5>
      <div> {desc}</div>
    </Container>
  );
}

Project.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.object,
  }),
};

export default Project;
