import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Avatar from "../components/avatar"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import { Heading, Section, Block } from "../emotion"

const IndexPage = ({ data }) => {
  const { homePage } = data.dataJson

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Heading>{homePage.title}</Heading>
        <Block backgroundImage="url('https://d33wubrfki0l68.cloudfront.net/ca0061c3c33c88b2b124e64ad341e15e2a17af49/c8765/images/alligator-logo3.svg')">
          {homePage.fullName}
        </Block>
        <Avatar />
      </div>
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
        fullName
        title
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
