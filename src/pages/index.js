import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Avatar from "../components/layout/avatar"
import SEO from "../components/layout/seo"
import { graphql } from "gatsby"

import { Heading, Section, Block } from "../emotion"

const IndexPage = ({ data }) => {
  const { homePage } = data.dataJson

  return (
    <Layout>
      <SEO title="Home" />
      <Heading>{homePage.info.age}</Heading>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Avatar />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const IndeexQuery = graphql`
  query IndeexQuery {
    dataJson {
      homePage {
        info {
          age
          address
          email
          phone
        }
      }
    }
  }
`
