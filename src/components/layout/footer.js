import { Link } from "gatsby"
import PropTypes, { string } from "prop-types"
import React from "react"
import { Block, Wrapper, SocialLink, FooterToggle } from "../../emotion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faSkype,
} from "@fortawesome/free-brands-svg-icons"
const icons = { faFacebook, faLinkedin, faGithub, faSkype }

const Footer = ({ sociall }) => {
  const capitalize = str => str[0].toUpperCase() + str.slice(1)
  const Icon = (icon, name) =>
    icon ? <FontAwesomeIcon icon={icon} /> : name.toUpperCase()

  return (
    <FooterToggle>
      <Wrapper>
        <Block>
          {sociall.map(({ link, name }) => {
            const icon = icons["fa" + capitalize(name)]
            return (
              <SocialLink key={name} href={link} target="_blank">
                {Icon(icon, name)}
              </SocialLink>
            )
          })}
        </Block>
      </Wrapper>
    </FooterToggle>
  )
}

export default Footer
