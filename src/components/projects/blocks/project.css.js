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
`;

export const Content = styled.div`
  width: 30%;
  ${MEDIA.TABLET`
    width:100%;
  `}
`;

export const Desc = styled.div`
  padding: 4px;
`;

export const Tags = styled.div`
  display: flex;
`;

export const Tag = styled.div`
  margin: 0 4px;
  padding: 0px 4px;
  font-size: 0.8rem;
  border: 1px solid #fff;
`;

export const ImgWrapper = styled.div`
  width: 70%;
  margin: 0 2rem;

  ${MEDIA.TABLET`
    margin: 0;
    width:100%;
  `}
`;
