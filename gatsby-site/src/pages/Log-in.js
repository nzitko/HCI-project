import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const logInPage = () => (

  <Layout>
    <SEO title="Log in" />
    <p className="page-title">Log in</p>
    <div className="log-in-container">
      <input type="text" placeholder="Username" className="input-field"></input>
      <input type="text" placeholder="E-mail" className="input-field"></input>
      <input type="password" placeholder="Password" className="input-field"></input>
      <input type="password" placeholder="Repeat password" className="input-field"></input>
      <button className="btn">Log in</button>
    </div>
  </Layout>

)

export default logInPage

