import React from "react";
import Link from "next/link";

import { Wrapper, List, ListItem } from "./styles";

export function Header() {
  return (
    <Wrapper>
      <Link href="/"><h5>slavaskainet@gmail.com</h5></Link>
      <Link href="/experience">Experience</Link>
      <Link href="/projects">Projects</Link>
    </Wrapper>
  );
}
