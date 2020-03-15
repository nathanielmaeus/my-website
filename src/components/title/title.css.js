import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${MEDIA.TABLET`
    height: 20vh;
    margin: 3rem 0;
  `};
`;

export const Text = styled.span`
  display: block;
  margin-bottom: 0rem;
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '7.5rem';
      default:
        return '3.3rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '4.5rem';
        default:
          return '2.2rem';
      }
    }};
  `};
`;

export const Subtitle = styled.h4`
  font-size: 2.2rem;
  color: #4d4d4d;

  ${MEDIA.TABLET`
    margin: 0.4rem 0.2rem;
    font-size: 1.2rem;
  `};
`;
