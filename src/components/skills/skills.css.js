import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Table = styled.div`
  padding-bottom: 1rem;
  margin-left: 8rem;
  font-size: 1rem;
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(1, minmax(50px, 1fr));
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #fff;

  &:last-child {
    border-bottom: none;
  }
`;

export const Column = styled.div`
  letter-spacing: ${({ letter }) => () => {
    if (letter === 'spacing') return '4px';
  }};
`;
