import * as React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby";
import { 
    container,
    siteTitle,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from "./layout.module.css";


const Layout = ({ pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
            }
            }
        }
    `)
    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to='/' className={navLinkText}>Projects</Link></li>
                    <li className={navLinkItem}><Link to='/blog' className={navLinkText}>Blog</Link></li>
                    <li className={navLinkItem}><Link to='/about' className={navLinkText}>Bio</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}


export default Layout