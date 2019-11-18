import React from "react";
import { Wrapper, Layout } from "./styles";
import IconAvatar from '../icons/avatar';

export function Main() {
  return (
    <Wrapper>
      <Layout>
        <div>
          <IconAvatar />
        </div>
        <div>
          I am a Front-end Developer, graduate of Internet Technology. I have 3
          years commercial experience providing front-end development, producing
          high quality responsive websites and exceptional user experience. I
          have a high level of responsibility. I always carry out tasks in
          accordance with the plan and deadlines. I every day learn something
          new in my sphere.
        </div>
      </Layout>
    </Wrapper>
  );
}
