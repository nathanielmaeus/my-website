import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.figure`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  ${MEDIA.TABLET`
    width: 100%;
  `};
`;
