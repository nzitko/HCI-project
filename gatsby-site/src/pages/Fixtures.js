import React from "react"
//import { Link } from "gatsby"
//import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/everton-logo.png"
import logo1 from "../images/west-ham-logo.png"

const fixturesPage = () => (
  <Layout>
    <SEO title="Fixtures" />
    <p className="page-title">Fixtures</p>
    <div className="fixtures-title-name">Gameweek 10</div>
    <div className="fixure-block">
      <div className="fixture-info">
        Goodison Park <br /> SAT 12:30 CET
      </div>

      <div className="fixture-icons">
        <img src={logo} alt="everton"></img>
        <img src={logo1} alt="west-ham"></img>
      </div>

      <div className="fixture-result"></div>
    </div>
  </Layout>
)

export default fixturesPage
