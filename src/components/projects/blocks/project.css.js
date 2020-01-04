import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  margin: 2rem 0;
  flex-direction: ${({ direction }) => direction};

  ${MEDIA.TABLET`
    flex-direction: column;
  `}
`;

export const Title = styled.a`
  padding: 4px;
  background: #750707;
  color: #fff;
  text-decoration: none;

  &:hover {
    background: #801a1a;
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  width: 30%;
  margin-top: 1rem;
  ${MEDIA.TABLET`
    width:100%;
  `}
`;

export const Desc = styled.div`
  padding: 4px;
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

export const ImgWrapper = styled.div`
  width: 70%;
  margin: 0 2rem;

  ${MEDIA.TABLET`
    margin: 0;
    width:100%;
  `}
`;
