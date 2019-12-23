import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  border-top: 1px solid #fff;

  img {
    margin: 8px;
  }

  ${MEDIA.TABLET`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: none;
  `};
`;
