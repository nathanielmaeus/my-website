import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
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
  width: 30%;
  margin-top: 1rem;
  ${MEDIA.TABLET`
    width:100%;
  `}
`;

export const Desc = styled.div`
  padding: 0px 4px;
`;

export const Tags = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

export const Tag = styled.div`
  margin: 0 4px;
  padding: 0px 4px;
  font-size: 0.8rem;
  border: ${({ theme }) => `1px solid ${theme === 'light' ? '#000' : '#fff'}`};
`;

export const ImgWrapper = styled.a`
  width: 70%;
  margin: 0 4rem;

  cursor: pointer;
  border: none;

  &:hover {
    border: none;
    background: none;
  }

  ${MEDIA.TABLET`
    margin: 0;
    width:100%;
  `}
`;
