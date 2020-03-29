import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Main from 'components/main';
import Layout from 'components/layout';
import Head from 'components/head';

import { Consumer } from 'store/createContext';

import styled from 'styled-components';
import Chapters from 'components/chapters';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

const About = ({ data: { aboutJson } }) => {
  return (
    <Consumer>
      {({ theme }) => (
        <Layout>
          <Main>
            <Head pageTitle={aboutJson.title} />
            <Container>
              <Chapters
                contacts={aboutJson.contacts}
                chapters={aboutJson.chapters}
                theme={theme}
              />
            </Container>
          </Main>
        </Layout>
      )}
    </Consumer>
  );
};

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
      chapters {
        source {
          childMarkdownRemark {
            html
          }
        }
        image
      }
    }
  }
`;
