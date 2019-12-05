import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Title from 'components/title';
import Skills from 'components/skills';
import Main from 'components/main';
import ImageItem from 'components/imageItem';
import { graphql } from 'gatsby';
import Projects from '../components/projects/projects';

const Index = ({ data }) => {
  return (
    <Layout>
      <Main>
        <Title as="h2" size="large">
          Hello there
        </Title>
        <p>
          I am a Front-end Developer, graduate of Internet Technology. I have 3
          years commercial experience providing front-end development, producing
          high quality responsive websites and exceptional user experience.
        </p>
        <ImageItem width={400} image={data.homeJson.gallery[0].image} />
      </Main>
      <Main>
        <Skills />
        <Projects items={data.homeJson.projects} />
      </Main>
    </Layout>
  );
};

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
      gallery {
        title
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      },
      projects {
        title
        desc
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
