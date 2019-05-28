import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyleSection } from "../../emotion"
import Title from "../shared/title"
import Nav from "./nav"

import { StyleHeader } from "./styles"

const Header = ({ siteTitle, siteDescription }) => {
  return (
    <StyleSection>
      <StyleHeader>
        <Nav />
      </StyleHeader>
    </StyleSection>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
