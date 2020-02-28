import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    margin: 0 1rem;
  }

  ${MEDIA.TABLET`
    height: 100%;
    margin: 0 1rem;
  `};
`;
