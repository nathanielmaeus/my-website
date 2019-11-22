import React from "react";
import Link from "next/link";

import { List, ListItem} from "./styles";
import { TelegramIcon } from "../icons/telegram";
import { GithubIcon } from "../icons/github";

export function Contacts() {
  return (
      <List type="none">
        <ListItem>
          <TelegramIcon className="icon"/>
          <a href="https://github.com/nathanielmaeus">@nathaniel_maeus</a>
        </ListItem>
        <ListItem>
          <GithubIcon className="icon"/>
          <a href="https://github.com/nathanielmaeus">@nathaniel_maeus</a>
        </ListItem>
      </List>
  );
}
