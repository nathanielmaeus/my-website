import React from "react";
import { Wrapper, Layout, LayoutItem, LogoImg, LogoName } from "./styles";
import IconAvatar from "../icons/avatar";
import Description from "../description";

export function Main() {
  return (
    <Wrapper>
      <Layout>
        <LayoutItem maxWidth="490px">
          I am a Front-end Developer, graduate of Internet Technology. I have 3
          years commercial experience providing front-end development, producing
          high quality responsive websites and exceptional user experience. I
          have a high level of responsibility.
        </LayoutItem>
        <LayoutItem>
          <LogoImg src={require("./me1.jpg")} alt="that's me" />
          <LogoName>Slava Ermakov</LogoName>
        </LayoutItem>
      </Layout>
      <Description />
    </Wrapper>
  );
}

// I am a Front-end Developer, graduate of Internet Technology. I have 3
// years commercial experience providing front-end development, producing
// high quality responsive websites and exceptional user experience. I
// have a high level of responsibility. I always carry out tasks in
// accordance with the plan and deadlines. I every day learn something
// new in my sphere.
