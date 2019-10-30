import React from "react"
import { Link } from "gatsby"

const SecondPage = () => (
  <div>
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/page-2/">Go back to the homepage</Link>
  </div>
)
export default SecondPage
