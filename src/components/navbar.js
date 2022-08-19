import { link } from 'gatsby';
import React from 'react'

export default function Navbar() {
    return (
        <nav>
        <h1>Test</h1>
        <div className="links">
            <link to="/">Home</link>
            <link to="/">Home</link>
            <link to="/">Home</link>
        </div>

        </nav>
    )
}