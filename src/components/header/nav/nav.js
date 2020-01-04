/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import LampIcon from '../../../icons/lampIcon';

import { Container, Switch } from './nav.css';

const Nav = ({ theme, changeTheme }) => (
  <Container>
    <ul>
      <li>
        <Link to="/portfolio">Code</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <Switch
        onClick={changeTheme}
        theme={theme === 'light' ? '#f2d17e' : '#dbd5d5'}
      >
        <LampIcon fill={theme === 'light' ? '#cfcccc' : '#FFD15C'} />
      </Switch>
    </ul>
  </Container>
);

Nav.propTypes = {
  changeTheme: PropTypes.func,
  theme: PropTypes.string,
};

export default Nav;
