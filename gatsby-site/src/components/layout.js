import React from "react"
import {Link} from "gatsby" 
import Navigation from "./navigation"
import "./layout.css"



//const myStyles= {backgroundColor:"#008B8B" , height: "100vh"}

const Layout = props => (
  <div class="mystyle">
      <Navigation menuItems={menuItems}></Navigation>
      {props.children}
  </div>
)

const menuItems = [
  {
    text: "Home",
    link: "/",
  },
  
  {
    text: "Teams",
    link: "/Teams",
  },
  {
    text: "Fixtures",
    link: "/Fixtures",
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

export default Layout
