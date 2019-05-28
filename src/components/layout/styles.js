import styled from "@emotion/styled"
// const background = props => props.background
// const backgroundImage = props => props.backgroundImage
const colors = {
  blueGray: "#1f2730",
  lightBlue: "#253446",
  darkBlue: "#0f1217",
}

export const StyleFooter = styled("footer")`
  background-color: ${colors.lightBlue};
  position: fixed;
  bottom: 0;
  width: 1200px;
  margin: 0 auto;
  height: 2px;
  transition: height 0.6s;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 18px 10px ${colors.darkBlue};
  overflow: hidden;
  opacity: 0;

  &:hover {
    height: 70px;
    opacity: 0.8;
  }
`

export const StyleHeader = styled("header")`
  margin: 0 auto;
  padding: 25px 0;
`
