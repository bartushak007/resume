import React from "react"
// import { jsx } from "@emotion/core"

const Title = ({ level = "1", children }) => {
  const Tag = `h${level}`
  const css = { fontFamily: "Arial", fontWeight: "normal" }

  return <Tag css={css}>{children}</Tag>
}

export default Title
