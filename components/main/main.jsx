import React from "react";
import { Wrapper, Layout, LayoutItem } from "./styles";
import Description from "../skills";
import IconHand from "../icons/hand";

export function Main() {
  return (
    <Wrapper>
      <Layout>
        <LayoutItem maxWidth="690px">
         <IconHand className="icon" w={36} h={36}/>
          <span className="main">
            Hello there. I am Viacheslav Ermakov, a middle front-end developer,
            graduate of Internet Technology.
          </span>
          <p>
            I have 3 years commercial experience providing front-end
            development, producing high quality responsive websites and
            exceptional user experience. I have a high level of responsibility.
            I always carry out tasks in accordance with the plan and deadlines.
            I every day learn something new in my sphere.
          </p>
        </LayoutItem>
        {/*<LayoutItem>
          <div className="main-info">
            <img className="logo" src={require("./me1.jpg")} alt="that's me" />
            <div className="name">Slava Ermakov</div>
          </div>
          <div className="desc">
            <p className="row">Middle Frontend Developer</p>
            <p className="row">22 y.o</p>
          </div>
        </LayoutItem>*/}
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
