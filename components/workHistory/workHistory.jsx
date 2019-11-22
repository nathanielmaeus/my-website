import React from "react";
import { List, ListItem } from "./styles";
import { Link } from "../../styles/Link";
import { Layout } from "../main/styles";

export function WorkHistory() {
  return (
    <Layout>
      <List type="none">
        <ListItem>
          <div className="title">Middle Frontend Developer</div>
          <div className="desc">
            OneTwoTrip enables travellers to compare flights offered by over 800
            carriers, worldwide, and to book the most economical flights. I work
            in the most important team in the company - avia team. We use React,
            Redux, SCSS, Storybook for our components library.
          </div>
          <div className="time"> 2018 - ...</div>
          <Link href="https://onetwotrip.com"> onetwotrip.com </Link>
        </ListItem>
        <ListItem>
          <div className="title">Middle Frontend Developer</div>
          <div className="desc">
            AlfaStrakhovanie Group is the largest Russian private insurance
            company with a universal portfolio of services that includes both
            comprehensive programs to protect business interests and a wide
            range of insurance products for individuals. Our team work with
            medical experts for developing web product for better work with
            getting medical insurance for out clients.
          </div>
          <div className="time"> June 2017 - December 2018</div>
          <Link href="https://onetwotrip.com"> AlfaStrahovanie </Link>
        </ListItem>
        <ListItem>
          <div className="title">Frontend Developer</div>
          <div className="desc">
            I develop different web applications for clients such as web store
            and landing sites.
          </div>
          <div className="time"> June 2017 - December 2018</div>
          <Link href="https://onetwotrip.com"> Freelance </Link>
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
