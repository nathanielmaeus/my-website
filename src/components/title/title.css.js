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
    margin: 2rem 0;
  `};
`;

export const Text = styled.span`
  display: block;

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
          return '5.5rem';
        default:
          return '2.2rem';
      }
    }};
  `};
`;

export const Subtitle = styled.h4`
  font-weight: 100;
  font-size: 2.2rem;

  ${MEDIA.TABLET`
    margin: 1rem 0;
    font-size: 1.2rem;
  `};
`;
