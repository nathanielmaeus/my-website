import React from 'react';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import Layout from 'components/layout';

const Main = styled.div`
  margin: 0 4rem;

  ${MEDIA.TABLET`
    margin: 0 1rem 1rem;  
  `};
`;

const NotFound = () => (
  <Layout>
    <Main>I still thinking what can I wrire here</Main>
  </Layout>
);

export default NotFound;
