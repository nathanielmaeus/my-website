import React from "react";
import { Wrapper, Layout, LayoutItem } from "./styles";
import Skills from "../skills";
import Description from "../description";
import IconHand from "../icons/hand";
import CoffeeImage from "../icons/coffee";
import Contacts from "../contacts";

export function Main() {
  return (
    <>
      <Wrapper>
        <Layout>
          <LayoutItem maxWidth="650px">
            <IconHand className="icon" w={36} h={36} />
            <span className="main">
              Hello there. I am Viacheslav Ermakov, 22 y.o, a middle front-end
              developer.
            </span>
            //
            <p>
              I have 3 years commercial experience providing front-end
              development, producing high quality responsive websites and
              exceptional user experience. I have a high level of
              responsibility. I always carry out tasks in accordance with the
              plan and deadlines. I every day learn something new in my sphere.
            </p>
          </LayoutItem>
        </Layout>
        {/* <LayoutItem maxWidth="650px">
          <CoffeeImage className="icon" w={36} h={36} />
        </LayoutItem> */}
        <Contacts />
        {/* <Skills /> */}
      </Wrapper>
      <Description />
    </>
  );
}

// I am a Front-end Developer, graduate of Internet Technology. I have 3
// years commercial experience providing front-end development, producing
// high quality responsive websites and exceptional user experience. I
// have a high level of responsibility. I always carry out tasks in
// accordance with the plan and deadlines. I every day learn something
// new in my sphere.
