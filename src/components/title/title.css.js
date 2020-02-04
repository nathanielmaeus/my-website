import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${MEDIA.TABLET`
    height: 20vh;
    margin: 2rem 0;
  `};
`;

export const Text = styled.span`
  display: block;
  text-align: center;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '500';
      default:
        return '400';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.5rem';
      default:
        return '1.3rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2rem';
        default:
          return '1.2rem';
      }
    }};
  `};
`;

export const Subtitle = styled.h4`
  text-align: center;
  font-family: Poppins;
  font-weight: 100;
  font-size: 2rem;
  color: #707070;

  ${MEDIA.TABLET`
    margin: 1rem 0;
    font-size: 1.2rem;
  `};
`;
