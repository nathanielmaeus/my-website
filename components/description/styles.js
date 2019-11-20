import styled from "styled-components";

export const Technology = styled.div``;

export const Desc = styled.div`
  grid-area: ${(props) => props.theme};
  display: flex;
  flex-direction: column;

  
  .row {
    margin-bottom: 8px;
  }
`;

export const Theme = styled.div`
  grid-area: ${(props) => props.theme};
  align-self: flex-start;
  align-items: center;
  width: 156px;

`;

export const Grid = styled.p`
  display: grid;
  grid-template-areas: "th_tech desc_tech" "th_soft desc_soft";
  grid-gap: 24px;
  max-width: ${(props) => props.maxWidth};
  font-size: 1rem;
  margin: 82px 0;
`;
