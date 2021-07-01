import React from "react"
import Navbar from "./Navbar"
import "../../styles/global.scss"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Title {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  return (
    <div className="layout">
      <Helmet title={title} />
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>copyright 2021</p>
      </footer>
    </div>
  )
}

export default Layout
