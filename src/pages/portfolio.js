import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Projects from '../components/projects/projects';

import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const Main = styled.div`
  margin: 0 4rem;

  ${MEDIA.TABLET`
    margin: 0 1rem;
  `};
`;

const Portfolio = ({ data: { portfolioJson } }) => (
  <Layout>
    <Main>
      <Projects items={portfolioJson.projects} />
    </Main>
  </Layout>
);

Portfolio.propTypes = {
  data: PropTypes.shape({
    portfolioJson: PropTypes.shape({
      projects: PropTypes.array,
    }),
  }),
};

export default Portfolio;

export const query = graphql`
  query PortfolioQuery {
    portfolioJson {
      projects {
        title
        desc
        href
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tags
      }
    }
  }
`;
