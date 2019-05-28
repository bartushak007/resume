import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout/layout"
// import Avatar from "../components/layout/avatar"
// import SEO from "../components/layout/seo"
import { graphql, useStaticQuery } from "gatsby"

import { StyleSection, StyleList, StyleListItem } from "../../../emotion"
import { spanBold, homeBlock } from "./style"
import Title from "../../shared/Title"
import Avatar from "../../../components/layout/avatar"

const HomeSection = () => {
  const data = useStaticQuery(graphql`
    query homeSectionQuery {
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
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const {
    dataJson: { homePage },
    site,
  } = data

  console.log(site)

  const returnList = ([key, value]) => (
    <StyleList key={key}>
      <StyleListItem>
        <span css={spanBold}>{key}</span>
        <span>{value}</span>
      </StyleListItem>
    </StyleList>
  )

  return (
    <StyleSection
      css={{
        display: "flex",
      }}
    >
      <div
        css={{
          flexGrow: "1",
        }}
      >
        <div css={homeBlock}>
          <Avatar css={{ width: "70px" }} />
          <Title>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {site.siteMetadata.title}
            </Link>
          </Title>
          <Title>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {site.siteMetadata.description}
            </Link>
          </Title>
        </div>
      </div>
      <div css={homeBlock}>{Object.entries(homePage.info).map(returnList)}</div>
    </StyleSection>
  )
}

export default HomeSection
