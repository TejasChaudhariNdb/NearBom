import React from "react";
import BottomNav from "./components/BottomNav.js";
import Link from "next/link";
import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title> NearBom </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" as="about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>

      <br />

    <center>This is About Page </center>

      <BottomNav />
    </>
  );
}
