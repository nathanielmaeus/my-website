import styled from 'styled-components';

import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 1rem;
  ${MEDIA.TABLET`
    height: 100%;
  `};
`;
