import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Consumer } from 'store/createContext';

import Layout from 'components/layout';
import Title from 'components/title';
import Skills from 'components/skills';
import Main from 'components/main';
import ImageItem from 'components/imageItem';

import { Bottom } from './index.css';

const Index = ({ data: { homeJson } }) => {
  const { title, desc, gallery, skills } = homeJson;
  return (
    <Consumer>
      {({ theme }) => (
        <Layout>
          <Main>
            <Title title={title} desc={desc} />
            <Bottom theme={theme}>
              <ImageItem width="250px" image={gallery[0].image} alt="avatar" />
              <Skills skills={skills} />
            </Bottom>
          </Main>
        </Layout>
      )}
    </Consumer>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    homeJson: PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      gallery: PropTypes.array.isRequired,
      skills: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      desc
      content {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        title
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      skills {
        title
        tools
      }
    }
  }
`;
