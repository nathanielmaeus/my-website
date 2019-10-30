import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Main from "../components/main";


const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Main />
    <style jsx global>{`
      html, body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </>
);

export default Home;
