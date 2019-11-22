import React from "react";
import Link from "next/link";

import { Wrapper, Logo, Nav } from "./styles";

export function Header() {
  return (
    <Wrapper>
      <Logo>
        <Link href="/">Main</Link>
      </Logo>
      <Nav className="sections">
        <Link href="/me">Me</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
      </Nav>
    </Wrapper>
  );
}
