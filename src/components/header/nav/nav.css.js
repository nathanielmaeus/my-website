import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 1rem;

    li {
      text-transform: uppercase;
      font-size: 1rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
