import styled from "styled-components";

export const Technology = styled.div``;

export const Desc = styled.div`
  grid-area: ${(props) => props.theme};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Theme = styled.div`
  grid-area: ${(props) => props.theme};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Grid = styled.p`
  display: grid;
  grid-template-areas: "th_tech desc_tech", "th_soft desc_soft";
`;
