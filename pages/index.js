import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Main from "../components/main";


const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Tomorrow&display=swap" rel="stylesheet" />
    </Head>
    <Header />
    <Main />
    <style jsx global>{`
      html, body {
        margin: 0;
        padding: 0;
        background-color: #000;
        color: #fff;
        font-family: 'Roboto', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 16px;
      }
    `}</style>
  </>
);

export default Home;
