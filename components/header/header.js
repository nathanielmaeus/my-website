import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  box-shadow: 1px 2px 18px rgba(0,0,0,.1);
  font-size: 24px;
`;

export function Header() {
  return <Div>It's a header!</Div>;
}
