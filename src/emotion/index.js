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
