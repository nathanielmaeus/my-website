import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from '../../imageItem/imageItem';
import { Container, Title, Desc } from './project.css';

function Project({ item: { image, title, desc } }) {
  return (
    <Container>
      <ImageItem className="preview" image={image} />
      <Title>{title}</Title>
      <Desc> {desc}</Desc>
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
