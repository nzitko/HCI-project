import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const logInPage = () => (
<div>
  <Layout>
    <SEO title="Log in" />
  </Layout>
  <div className = "log-in-container">
   <p className="page-title">Log in</p>
   <input type="text" placeholder="Username" className="inputField"></input>
   <input type="password" placeholder="Password" className="inputField"></input>
   <input type="password" placeholder="Repeat password" className="inputField"></input>
   <button className="btn">Log in</button>
  </div>
</div>
)

export default logInPage

