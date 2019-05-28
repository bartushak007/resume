import { Link } from "gatsby"
import { css } from "@emotion/core"

import React from "react"
import { StyleList, StyleListItem } from "../../emotion"

const Nav = () => {
  const styleLink = {
      color: "#fff",
      textDecoration: "none",
    },
    activeStyleLink = { color: "purple" }

  return (
    <div>
      <StyleList>
        <StyleListItem>
          <Link style={styleLink} activeStyle={activeStyleLink} to="/">
            Home
          </Link>
        </StyleListItem>
        <StyleListItem>
          <Link style={styleLink} activeStyle={activeStyleLink} to="/page-2/">
            Two
          </Link>
        </StyleListItem>
        <StyleListItem>
          <Link style={styleLink} activeStyle={activeStyleLink} to="/404/">
            Error
          </Link>
        </StyleListItem>
      </StyleList>
    </div>
  )
}

export default Nav
