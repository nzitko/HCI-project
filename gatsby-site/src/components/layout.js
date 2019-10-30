
import React from "react"
import {Link} from "gatsby" 
import Navigation from "./navigation"
import "./layout.css"

const menuItems = [
  {
    text: "Page 2",
    link: "/page-2",
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
