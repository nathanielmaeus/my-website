import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 468px;
  box-sizing: border-box;
  font-size: 24px;
`;

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 64px 24px;
  width: 100%;
  min-width: 468px;
`;

export const LayoutItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
  letter-spacing: 0.8px;
  line-height: 1.4;
  max-width: ${(props) => props.maxWidth};
  margin: 0 32px;
`;

export const LogoName = styled.p`
  font-weight: 600;
  font-size: 2.8rem;
  letter-spacing: 0.2rem;
  margin: 16px;
  font-family: "Tomorrow", sans-serif;

`;

export const Img = styled.img`

`;


export const LogoImg = styled.img`
  height: 88px;
  width: 88px;
  border-radius: 50%;
  margin: 16px;
`;
