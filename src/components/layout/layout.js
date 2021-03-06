import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';
import { Consumer } from 'store/createContext';

const Layout = ({ data, children }) => (
  <Consumer>
    {({ theme }) => (
      <>
        <GlobalStyle theme={theme} />
        <Head />
        <Header title={data.site.siteMetadata.siteTitle} />
        {children}
      </>
    )}
  </Consumer>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(LayoutWithQuery);
