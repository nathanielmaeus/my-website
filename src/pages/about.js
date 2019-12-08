import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';
import { Main, Container } from './about.css';
import Contacts from '../components/contacts/contacts';

const About = ({ data }) => (
  <Layout>
    <Main>
      <Head pageTitle={data.aboutJson.title} />
      <Container>
        <section
          dangerouslySetInnerHTML={{
            __html: data.aboutJson.content.childMarkdownRemark.html,
          }}
        ></section>
        <Contacts contacts={data.aboutJson.contacts} />
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
