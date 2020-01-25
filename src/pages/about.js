import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Head from 'components/head';
import Contacts from '../components/contacts';

import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const Main = styled.div`
  margin: 0 4rem;

  ${MEDIA.TABLET`
    margin: 0 1rem;
  `};
`;

const Container = styled.div`
  display: flex;

  ${MEDIA.TABLET`
    flex-direction: column-reverse;
  `};
`;

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
