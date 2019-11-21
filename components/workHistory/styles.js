import styled from "styled-components";

export const List = styled.ul``;

export const ListItem = styled.li`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr  5fr  1fr 1fr;
  justify-items: flex-start;
  align-items: center;
  grid-column-gap: 24px;
  max-width: ${props => props.maxWidth};
  font-size: 1.3rem;
  padding: 16px 0;
  border-bottom: 1px solid #eee;

  .stack {
  }
  .title {
    margin: 8px 0;
    align-self: flex-start;
    font-weight: 600;
  }
  .desc {
  }
`;

export const Link = styled.a`
justify-self: center;
  padding: 8px 16px;
  background-color: #9999ff;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
`;
