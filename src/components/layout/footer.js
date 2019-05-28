import { Link } from "gatsby"
import PropTypes, { string } from "prop-types"
import React from "react"
import {
  StyleBlock,
  StyleWrapper,
  StyleSocialLink,
  StyleSection,
} from "../../emotion"
import { StyleFooter } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faSkype,
} from "@fortawesome/free-brands-svg-icons"
const icons = { faFacebook, faLinkedin, faGithub, faSkype }

const Footer = ({ sociall }) => {
  const capitalize = str =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  const Icon = (icon, name) =>
    icon ? <FontAwesomeIcon icon={icon} /> : name.toUpperCase()

  const renderSocialLink = ({ link, name }) => {
    const icon = icons["fa" + capitalize(name)]
    return (
      <StyleSocialLink key={name} href={link} target="_blank">
        {Icon(icon, name)}
      </StyleSocialLink>
    )
  }

  return (
    <StyleSection>
      <StyleFooter>
        <StyleWrapper>{sociall.map(renderSocialLink)}</StyleWrapper>
      </StyleFooter>{" "}
    </StyleSection>
  )
}

export default Footer
