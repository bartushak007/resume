import styled from "@emotion/styled"
const background = props => props.background
const backgroundImage = props => props.backgroundImage

export const Heading = styled("h1")`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
`

export const Wrapper = styled("div")`
  background: ${background};
  background-image: ${backgroundImage};
  max-width: 100%;
  margin: 0 auto;
`

export const Section = styled("div")`
  background: ${background};
  background-image: ${backgroundImage};
  max-width: 1400px;
  margin: 0 auto;
`

export const Block = styled("div")`
  background: ${background};
  background-image: ${backgroundImage};
  max-width: 1200px;
  margin: 0 auto;
`

export const SocialLink = styled("a")`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
`

export const FooterToggle = styled("div")`
  background-color: #333333;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  opacity: 0;
  transition: height 0.6s;
  padding-top: 20px;
  text-align: right;

  &:hover {
    height: 50px;
    opacity: 1;
  }
`
