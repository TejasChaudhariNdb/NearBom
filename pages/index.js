import Head from "next/head";
import Button from "@material-ui/core/Button";
import BottomNav from "./components/BottomNav.js";
import Nav from "./components/Nav.js";
import Link from "next/link";
import Joke from "./joke.js";

export default function Home() {
  return (
    <>
      <Head>
        <title> NearBom </title> <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
      <Joke />
      <BottomNav />
    </>
  );
}
