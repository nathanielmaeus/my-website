import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'store/createContext';
import Slider from 'components/slider/slider';
import Img from 'gatsby-image';
import { useIntersectionObserver } from 'components/io';
import {
  Container,
  Title,
  Desc,
  Tag,
  Tags,
  Content,
  Wrapper,
} from './project.css';

function Project({ idx, item: { images, title, desc, tags = [], href } }) {
  const divRef = React.useRef();
  const [isVisible] = useIntersectionObserver(divRef, '-30%');

  const direction = idx % 2 === 0 ? 'row' : 'row-reverse';

  const componentImages = images.map(url => {
    return (
      <Img
        key={url.childImageSharp.fluid}
        fluid={url ? url.childImageSharp.fluid : {}}
        alt="alt"
      />
    );
  });

  return (
    <Consumer>
      {({ theme }) => (
        <Container direction={direction}>
          <Wrapper direction={direction}>
            <div ref={divRef}>
              <Slider images={componentImages} isVisible={isVisible} />
            </div>
          </Wrapper>

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
    images: PropTypes.array,
    href: PropTypes.string,
    tags: PropTypes.array,
  }),
};

export default React.memo(Project);
