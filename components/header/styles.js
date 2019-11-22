import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  margin: 0 auto;
  top: 0;
  width: 100%;
  height: 60px;
  margin: 8px 8px;
  box-sizing: border-box;
  font-size: 0.9rem;

  .sections {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 360px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;
export const Nav = styled.nav`
  a {
    margin: 0 16px;
    font-size: 1.2rem;
  }
`;
export const Logo = styled.h1`
    font-weight: 600;

  font-size: 1.5rem;
`;
