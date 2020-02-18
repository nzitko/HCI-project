import React from "react"
import Navigation from "./navigation"
import "./layout.css"

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
  },
  {
    text: "Log in",
    link: "/Log-in",
  }
]

//const myStyles= {backgroundColor:"#008B8B" , height: "100vh"}

const Layout = props => ( //(props) => {kod blablabla return()} PROPS JE OBJEKT
  <div className="mystyle">
    <Navigation menuItems={menuItems}></Navigation>
    {props.children}
  </div> //u props children se rendera sve sta se ubaci u layout komponentu u index.jsu(kod nas)
  //{children} je destruktuiranje: napravi se varijabla children u koju ulete vrijdnosti propertija childrena
)

export default Layout
