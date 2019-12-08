import styled from 'styled-components';

export const List = styled.section`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(2, 264px);
`;
