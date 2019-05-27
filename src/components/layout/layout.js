import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer";

import '../../css/index.css';

import { Section, Block, Wrapper } from "../../emotion"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        dataJson {
          sociall {
            name
            link
          }
        }
      }
    `}
    render={({ site: { siteMetadata }, dataJson }) => {
      return (
        <>
          <Header
            siteTitle={siteMetadata.title}
            siteDescription={siteMetadata.description}
          />
          <Wrapper>
            <main>{children}</main>
          </Wrapper>
          <Footer sociall={dataJson.sociall} />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
