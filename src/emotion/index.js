import styled from "@emotion/styled"
const background = props => props.background
const backgroundImage = props => props.backgroundImage
const 
  colors = {
    gray: '#333333'
  },
  durationAnimation = {
    icons: '0.4s'
  };


export const Heading2 = styled("h2")`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  font-family: Arial;
`

export const Heading3 = styled("h3")`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  font-family: Arial;
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
  margin-right: 15px;
  font-size: 25px;
  cursor: pointer;
  transition: ${durationAnimation.icons};
  transform: rotate(0deg);   
  
  &:hover {    
    color: #607d8b;
  }  

  &:hover svg {
    animation: heartbeat 1s infinite;
    @keyframes heartbeat
    {
      0%
      {
        transform: scale(1 );
      }
      50%
      {
        transform: scale( .8 );
      }
            
      100%
      {
        transform: scale( 1 );
      }      
    }
  }
`

export const FooterToggle = styled("div")`
  background-color: ${colors.gray};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;  
  transition: height 0.6s;  
  overflow: hidden; 
  display: flex;
  align-items: center;

  &:hover {
    height: 70px;
    opacity: 0.8;    
  }  
`
export const List = styled("ul")`
  display: flex;
`
export const ListItem = styled("li")`
  list-style-type: none;
  margin-left: 15px;
  font-size: 25px;
  color: white;
`