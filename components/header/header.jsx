import React from "react";

import { Wrapper, List, ListItem } from './styles';

export function Header() {
  return (
    <Wrapper>
      <h2>Slava Ermakov</h2>
      <List type="none">
        <ListItem>Portfolio</ListItem>
        <ListItem>Contact</ListItem>
      </List>
    </Wrapper>
  );
}
