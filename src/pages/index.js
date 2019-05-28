import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Avatar from "../components/layout/avatar"
import SEO from "../components/layout/seo"
import { graphql } from "gatsby"

import HomeSection from "../components/sections/homeSection/homeSection"

import { Title, Section, Block } from "../emotion"

const IndexPage = ({ data }) => {
  const { homePage } = data.dataJson

  return (
    <Layout>
      <SEO title="Home" />
      {/* <Title.h1>{homePage.info.age}</Title.h1> */}
      <HomeSection />
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
