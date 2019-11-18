import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 4px 64px;
  box-sizing: border-box;
  font-size: 24px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  margin: 0 8px;
`;
