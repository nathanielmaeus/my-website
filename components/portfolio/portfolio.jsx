import React from "react";
import { List, ListItem } from "./styles";
import { Link } from '../../styles/Link';
import { Layout } from "../main/styles";
import IconAvatar from "../icons/avatar";

export function Portfolio() {
  return (
    <Layout>
      <List type="none">
        <h2>Latest Pet Projects</h2>
        <ListItem>
          <div className="stack"></div>
          <div className="title">SpootiFly</div>
          <div className="desc">
            Music web player based on Deezer API with TypeScript, React Hooks
            and Redux
          </div>
          <Link href="#">Source</Link>
          <Link href="#">Demo</Link>
        </ListItem>
        <ListItem>
          <div className="stack"></div>
          <div className="title">Unsplash</div>
          <div className="desc">
            Photo Viewer based on Unsplash API by React, Redux
          </div>
          <Link href="#">Source</Link>
          <Link href="#">Demo</Link>
        </ListItem>
        <ListItem>
          <div className="stack"></div>
          <div className="title">tg-chart</div>
          <div className="desc">Some charts with vanila js and canvas</div>
          <Link href="https://yandex.ru">Source</Link>
          <Link href="#">Demo</Link>
        </ListItem>
      </List>
    </Layout>
  );
}

// I am a Front-end Developer, graduate of Internet Technology. I have 3
// years commercial experience providing front-end development, producing
// high quality responsive websites and exceptional user experience. I
// have a high level of responsibility. I always carry out tasks in
// accordance with the plan and deadlines. I every day learn something
// new in my sphere.
