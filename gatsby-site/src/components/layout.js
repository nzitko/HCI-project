
import React from "react"
import {Link} from "gatsby" 
import Navigation from "./navigation"
import "./layout.css"

const menuItems = [
  {
    text: "Home",
    link: "/",
  },
  
  {
    text: "Teams",
    link: "/page-2",
  },
  {
    text: "Fixtures",
    link: "/page-3",
  },
  {
    text: "Table",
    link: "/Table",
  },
  {
    text: "Players",
    link: "/Players",
  },
  {
    text: "Social",
    link: "/Social",
  }
]

//const myStyles= {backgroundColor:"#008B8B" , height: "100vh"}

const Layout = props => (
  <div class="mystyle">
      <Navigation menuItems={menuItems}></Navigation>
      {props.children}
  </div>
)

export default Layout
