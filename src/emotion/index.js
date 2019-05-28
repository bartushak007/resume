import styled from "@emotion/styled"
const background = props => props.background
const backgroundImage = props => props.backgroundImage

const colors = {
    gray: "#525d69",
  },
  durationAnimation = {
    icons: "0.4s",
  }

export const StyleWrapper = styled("div")`
  background: ${background};
  background-image: ${backgroundImage};
  max-width: 100%;
  margin: 0 auto;
`

export const StyleSection = styled("div")`
  background: ${background};
  background-image: ${backgroundImage};
  max-width: 1200px;
  margin: 0 auto;
`

export const StyleBlock = styled("div")`
  background: ${background};
  background-image: ${backgroundImage};
  max-width: 900px;
  margin: 0 auto;
`

export const StyleSocialLink = styled("a")`
  color: #fff;
  text-decoration: none;
  margin-right: 15px;
  font-size: 25px;
  cursor: pointer;
  transition: ${durationAnimation.icons};
  transform: rotate(0deg);
  cursor: pointer;

  &:hover {
    color: #607d8b;
  }

  &:hover svg {
    animation: heartbeat 1s infinite;
    @keyframes heartbeat {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.8);
      }

      100% {
        transform: scale(1);
      }
    }
  }
`

export const StyleList = styled("ul")`
  display: flex;
`
export const StyleListItem = styled("li")`
  list-style-type: none;
  margin-left: 15px;
  font-size: 25px;
  color: white;
`
