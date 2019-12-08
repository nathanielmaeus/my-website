import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Projects from '../components/projects/projects';

import { Main } from './about.css';

const Portfolio = ({ data }) => (
  <Layout>
    <Main>
      <Projects items={data.portfolioJson.projects} />
    </Main>
  </Layout>
);

Portfolio.propTypes = {
  data: PropTypes.object.isRequired,
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
