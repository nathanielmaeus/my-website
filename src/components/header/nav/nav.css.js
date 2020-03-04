import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 1rem 0;

    li {
      text-transform: uppercase;
      font-size: 0.8rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;

export const Switch = styled.li`
  svg {
    transition: 0.3s;
    cursor: pointer;

    :hover {
      fill: ${({ theme }) => theme};
      g:last-child {
        fill: ${({ theme }) => theme};
      }
    }
  }
`;
