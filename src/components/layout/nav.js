import { Link } from "gatsby"

import React from "react"
import { List, ListItem } from "../../emotion"



const Nav = () => {
  

  return (
    <div>
      <List>
        <ListItem><Link to="/">Home</Link></ListItem>
        <ListItem><Link to="/page-2/">Two</Link></ListItem>
        <ListItem><Link to="/404/">Error</Link></ListItem>
      </List>
    </div>
  )
}

export default Nav
