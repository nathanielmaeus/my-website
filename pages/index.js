import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import styled from "styled-components";
import Header from "../components/header";

const Text = styled.div`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <style jsx global>{`
      html, body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Home;
