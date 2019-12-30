import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Head from 'components/head';
import Contacts from '../components/contacts';

import { Main, Container } from './about.css';

const About = ({ data: { aboutJson } }) => (
  <Layout>
    <Main>
      <Head pageTitle={aboutJson.title} />
      <Container>
        <section
          dangerouslySetInnerHTML={{
            __html: aboutJson.content.childMarkdownRemark.html,
          }}
        ></section>
        <Contacts contacts={aboutJson.contacts} />
      </Container>
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
      contacts {
        url
        name
        type
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
