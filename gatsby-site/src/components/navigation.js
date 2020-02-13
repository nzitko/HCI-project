import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const Navigation = ({menuItems}) => {
    const menus = menuItems.map(({ link, text }) => (
        <li className = "every-link" key={link}  >
          <Link to={link}>{text}</Link>
        </li>
      ))

      return <ul className="link">{menus}</ul>
}

export default Navigation