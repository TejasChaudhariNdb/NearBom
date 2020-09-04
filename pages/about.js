import React from 'react'
import BottomNav from './components/BottomNav.js'
import Nav from './components/Nav.js'
import Link from 'next/link'
export default function about() {
    return (
        <>
        <Nav/>
        <div>
        <Link href="/">
          <a>Home</a>
        </Link>
    <br/>
            About
        </div>
        <BottomNav/>
        </>
    )
}
