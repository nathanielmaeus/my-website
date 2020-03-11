import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, Logo } from './header.css';
import Nav from 'components/header/nav';
import { Consumer } from 'store/createContext';

const Header = ({ title }) => (
  <Consumer>
    {({ theme, changeTheme }) => (
      <Container>
        <Logo>
          <Link to="/">{title}</Link>
        </Logo>
        <Nav theme={theme} changeTheme={changeTheme} />
      </Container>
    )}
  </Consumer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(Header);
