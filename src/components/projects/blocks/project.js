import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'store/createContext';

import ImageItem from '../../imageItem/imageItem';
import {
  Container,
  Title,
  Desc,
  Tag,
  Tags,
  Content,
  ImgWrapper,
} from './project.css';

function Project({ idx, item: { image, title, desc, tags = [], href } }) {
  return (
    <Consumer>
      {({ theme }) => (
        <Container direction={idx % 2 === 0 ? 'row' : 'row-reverse'}>
          <ImgWrapper>
            <ImageItem className="preview" image={image} alt={title} />
          </ImgWrapper>

          <Content>
            <Title href={href} target="_blink">
              {title}
            </Title>
            <Desc> {desc}</Desc>
            <Tags>
              {tags.map(tag => {
                return (
                  <Tag key={tag} theme={theme}>
                    {tag}
                  </Tag>
                );
              })}
            </Tags>
          </Content>
        </Container>
      )}
    </Consumer>
  );
}

Project.propTypes = {
  idx: PropTypes.number,
  item: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.object,
    href: PropTypes.string,
    tags: PropTypes.array,
  }),
};

export default Project;
