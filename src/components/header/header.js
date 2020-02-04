import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container, Logo } from './header.css';
import Nav from 'components/header/nav';
import { Consumer } from 'store/createContext';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <Consumer>
    {({ theme, changeTheme }) => (
      <AnimatedContainer>
        <Container>
          <Logo>
            <Link to="/">{title}</Link>
          </Logo>
          <Nav theme={theme} changeTheme={changeTheme} />
        </Container>
      </AnimatedContainer>
    )}
  </Consumer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
