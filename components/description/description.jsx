import React from "react";
import { Grid, Layout, Desc, Theme } from "./styles";
import IconAvatar from "../icons/avatar";

export function Description() {
  return (
      <Grid maxWidth="490px">
        <Theme area="th_tech">Technologies</Theme>
        <Desc area="desc_tech"><span>ReactJS</span><span>SvetleJS</span></Desc>
        <Theme area="th_soft">Soft Skills</Theme>
        <Desc area="desc_soft"><span>Sadness</span></Desc>
      </Grid>
  );
}

// I am a Front-end Developer, graduate of Internet Technology. I have 3
// years commercial experience providing front-end development, producing
// high quality responsive websites and exceptional user experience. I
// have a high level of responsibility. I always carry out tasks in
// accordance with the plan and deadlines. I every day learn something
// new in my sphere.
