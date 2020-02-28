import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  position: relative;
  margin: 2rem 0;
  flex-direction: ${({ direction }) => direction};

  ${MEDIA.TABLET`
    margin: 1rem 0;
    flex-direction: column;
  `}
`;

export const Title = styled.a`
  padding: 4px 0;
`;

export const Content = styled.div`
  width: 40%;
  margin-top: 1rem;
  ${MEDIA.TABLET`
    width:100%;
  `}
`;

export const Desc = styled.div`
  margin: 0.5rem 0;
  font-size: 0.8rem;
`;

export const Tags = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

export const Tag = styled.div`
  &:not(:first-child) {
    margin-left: 0.6rem;
  }
  padding: 0 0.4rem;
  font-size: 0.8rem;
  border: ${({ theme }) => `1px solid ${theme === 'light' ? '#000' : '#fff'}`};
`;

export const Wrapper = styled.div`
  width: 60%;
  margin-left: ${({ direction }) => (direction === 'row' ? '0' : '4rem')};
  margin-right: ${({ direction }) => (direction === 'row' ? '4rem' : '0')};

  &:hover {
    border: none;
    background: none;
  }

  ${MEDIA.TABLET`
    margin: 0;
    width:100%;
  `}
`;
