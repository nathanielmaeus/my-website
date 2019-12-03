import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Title as="h2" size="large">
      <div
        dangerouslySetInnerHTML={{
          __html: data.homeJson.content.childMarkdownRemark.html,
        }}
      ></div>
    </Title>
    <div style={{ height: '50vh' }} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
