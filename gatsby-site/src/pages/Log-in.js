import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const logInPage = () => (

  <Layout>
    <SEO title="Log in" />
    <div className = "log-in-container">
      <p className="page-title">Log in</p>
      <input type="text" placeholder="Username" className="inputField"></input>
      <input type="text" placeholder="E-mail" className="inputField"></input>
      <input type="password" placeholder="Password" className="inputField"></input>
      <input type="password" placeholder="Repeat password" className="inputField"></input>
      <button className="btn">Log in</button>
    </div>
  </Layout>
 
)

export default logInPage

