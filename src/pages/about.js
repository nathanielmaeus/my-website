import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';
import { Main } from './about.css';

const About = ({ data }) => (
  <Layout>
    <Main>
      <Head pageTitle={data.aboutJson.title} />
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      ></div>
    </Main>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
