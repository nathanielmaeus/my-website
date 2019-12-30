import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Main = styled.div`
  margin: 0 2rem;
`;

export const Container = styled.div`
  display: flex;

  ${MEDIA.TABLET`
    flex-direction: column-reverse;
  `};
`;
