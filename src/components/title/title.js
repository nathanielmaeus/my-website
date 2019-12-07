import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Subtitle } from './title.css';

const Title = () => {
  return (
    <Container>
      <Text as="h1" size="large">
        Viacheslav Ermakov
      </Text>
      <Subtitle>frontend developer, 22 y.o</Subtitle>
    </Container>
  );
};

Title.propTypes = {};

export default Title;
