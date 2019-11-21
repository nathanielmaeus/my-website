import React from "react";
import Head from "next/head";
import Header from "../components/header";
import WorkHistory from "../components/workHistory";


const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Tomorrow&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=ABeeZee|Dosis|Exo+2|Kanit|Rajdhani&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Header />
    <WorkHistory />
    <style jsx global>{`
      body {
        margin: 0 8%;
      }
      html,
      body {
        padding: 0;
        background-color: #fff;
        color: #000;
        font-family: "Dosis", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        font-size: 16px;
      }
    `}</style>
  </>
);

export default Home;
