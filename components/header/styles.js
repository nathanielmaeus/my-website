import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 8px 64px;
  box-sizing: border-box;
  background: white;
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
  font-size: 24px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  margin: 0 8px;
`;
