import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  a {
    transition: color 0.2s ease;
    text-decoration: none;
  }
`;

export const Logo = styled.span`
  a {
    border: none;
  }
`;
