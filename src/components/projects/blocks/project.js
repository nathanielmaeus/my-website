import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from '../../imageItem/imageItem';
import { Container, Title, Desc, Tag, Tags } from './project.css';

function Project({ item: { image, title, desc, tags = [], href } }) {
  return (
    <Container>
      <ImageItem className="preview" image={image} alt={title} />
      <Title href={href} target="_blink">
        {title}
      </Title>
      <Desc> {desc}</Desc>
      <Tags>
        {tags.map(tag => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </Tags>
    </Container>
  );
}

Project.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.object,
    href: PropTypes.string,
    tags: PropTypes.array,
  }),
};

export default Project;
