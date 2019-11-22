import React from "react";
import { Wrapper, Layout, LayoutItem } from "./styles";
import Skills from "../skills";

export function Description() {
  return (
    <Wrapper>
      <Layout>
        <LayoutItem>
          <div className="main-info">
            //
            <img className="logo" src={require("./me1.jpg")} alt="that's me" />
          </div>
        </LayoutItem>
        <LayoutItem>
          <Skills />
        </LayoutItem>
      </Layout>
    </Wrapper>
  );
}

// I am a Front-end Developer, graduate of Internet Technology. I have 3
// years commercial experience providing front-end development, producing
// high quality responsive websites and exceptional user experience. I
// have a high level of responsibility. I always carry out tasks in
// accordance with the plan and deadlines. I every day learn something
// new in my sphere.
