import React from "react";
import Link from "next/link";

import { Wrapper, List, ListItem } from "./styles";

export function Header() {
  return (
    <Wrapper>
      <nav className="sections">
        <Link href="/">Main</Link>
        <Link href="/me">Me</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </Wrapper>
  );
}
