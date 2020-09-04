import React from 'react'
import BottomNav from './components/BottomNav.js'
import Nav from './components/Nav.js'
import Link from 'next/link'
import Joke from "./joke.js"

export default function about() {
    return (
        <>
        <Nav/>
    
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

    <br/>
    
    <marquee>        This is About Page </marquee>
    
    <Joke />
        <BottomNav/>
        </>
    )
}
