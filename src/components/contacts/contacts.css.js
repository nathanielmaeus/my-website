import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  margin: 0.8rem 5rem;

  ${MEDIA.TABLET`
    margin: 1rem 0;
  `};
`;

export const Contact = styled.div`
  display: flex;
  align-content: center;
  margin-bottom: 0.6rem;

  a {
    margin-left: 1.2rem;
  }

  path {
    fill: #fff;
  }
`;
