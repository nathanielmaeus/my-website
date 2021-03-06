import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Table = styled.div`
  width: 60%;
  margin-left: 8rem;
  font-size: 1rem;
  ${MEDIA.TABLET`
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
  `};
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(1, minmax(50px, 1fr));
  padding-bottom: 0.4rem;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme === 'light' ? '#000' : '#fff'}`};

  &:last-child {
    border-bottom: none;
  }
`;

export const Column = styled.div`
  letter-spacing: ${({ letter }) => () => {
    if (letter === 'spacing') return '4px';
  }};

  ${MEDIA.TABLET`
    max-width: ${({ letter }) => () => {
      if (letter === 'spacing') return '95px';
    }};
  `};
`;

export const Highlight = styled.span`
  background: #dbf32c;
  color: #000;
  font-size: 0.8rem;
  padding: 3px 0;

  ${MEDIA.TABLET`
    font-size: 0.9rem;
  `};
`;

export const Tools = styled(Column)``;
