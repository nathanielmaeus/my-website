import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  height: 20%;
  margin: 0.8rem 5rem;
  padding-left: 16px;

  border-left: ${({ theme }) =>
    `1px solid ${theme === 'light' ? '#000' : '#fff'}`};

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
    background: #dbf32c;
    color: #000;
    text-decoration: none;

    &:hover {
      background: #7a8a06;
      text-decoration: underline;
    }
  }
`;
