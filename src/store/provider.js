import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './createContext';

class AppProvider extends Component {
  state = {
    theme: 'light',
    changeTheme: () =>
      this.setState(state => ({
        theme: state.theme === 'light' ? 'dark' : 'light',
      })),
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
