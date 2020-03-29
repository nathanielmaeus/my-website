import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Chapter = styled.section`
  display: flex;
  font-size: ${({ isLarge }) => (isLarge ? '1.1rem' : '0.9rem')};
  margin-bottom: ${({ isLarge }) => (isLarge ? '2rem' : '0')};

  :nth-child(2n) {
    flex-direction: row-reverse;

    .text {
      margin-left: 4rem;
      width: 60%;
    }
    .doodle {
      margin-right: 2rem;
    }
  }

  :nth-child(2n + 1) {
    .text {
      width: 60%;
    }
    .doodle {
      margin-left: 2rem;
    }
  }

  .doodle {
    height: 30rem;
    g {
      transition: 0.3s;
    }
  }

  ${MEDIA.TABLET`
    :nth-child(2n), :nth-child(2n+1) {
      flex-direction: column;
      .text, .doodle {
        margin-right: 0;
        margin-left: 0;
        width: 100%;
      }
    }

    .doodle {
      height: 18rem;
      margin-top: 2rem;
    }
  `};
`;
