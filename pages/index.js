import Head from "next/head";
import BottomNav from "./components/BottomNav.js";
import Nav from "./components/Nav.js";
import Link from "next/link";

import SimpleTab from "./SimpleTab.js"

export default function Home() {
  return (
    <>
      <Head>
        <title> NearBom </title> <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

<SimpleTab/>
      <BottomNav />
    </>
  );
}
