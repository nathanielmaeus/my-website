import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Subtitle } from './title.css';

const Title = ({ title, desc }) => {
  return (
    <Container>
      <Text as="h1" size="large">
        {title}
      </Text>
      <Subtitle>{desc}</Subtitle>
    </Container>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default React.memo(Title);
