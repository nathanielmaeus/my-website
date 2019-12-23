import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const List = styled.section`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  ${MEDIA.TABLET`
    grid-gap: 0;
  `};
`;
