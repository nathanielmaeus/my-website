import React from "react";
import { Grid, Desc, Theme } from "./styles";
import { Layout } from "../main/styles";

export function Skills() {
  return (
    <Layout>
      <Grid maxWidth="390px">
        <Theme area="th_tech">Technologies</Theme>
        <Desc area="desc_tech">
          <span className="row">HTML5</span>
          <span className="row">CSS (SASS, SCSS)</span>
          <span className="row">Javascript(ES5+)</span>
          <span className="row">ReactJS</span>
          <span className="row">Redux</span>
          <span className="row">TypeScript</span>
          <span className="row">redux-saga</span>
          <span className="row">redux-thunk</span>
          <span className="row">SvetleJS</span>
        </Desc>
        <Theme area="th_soft">Languages</Theme>
        <Desc area="desc_soft">
          <span className="row">Russian / Native</span>
          <span className="row">English / B2</span>
        </Desc>
      </Grid>
    </Layout>
  );
}

// I am a Front-end Developer, graduate of Internet Technology. I have 3
// years commercial experience providing front-end development, producing
// high quality responsive websites and exceptional user experience. I
// have a high level of responsibility. I always carry out tasks in
// accordance with the plan and deadlines. I every day learn something
// new in my sphere.
