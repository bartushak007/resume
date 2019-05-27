import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Heading2, Heading3, Section, Block, Wrapper } from "../../emotion"
import Nav from "./nav"

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      background: `#333333`,
      display: `flex`,
      justifyContent:"space-around",
    }}
  >
    <div>
      <Heading2>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Heading2>
      <Heading3>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteDescription}
        </Link>
      </Heading3>
    </div>
    <Nav/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
