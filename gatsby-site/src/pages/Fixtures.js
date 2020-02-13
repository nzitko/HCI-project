import React from "react"
import FixtureBlock from "../components/FixtureBlock"
import Layout from "../components/layout"
import SEO from "../components/seo"
import evelogo from "../images/everton-logo.png"
import whulogo from "../images/west-ham-logo.png"

const fixturesPage = () => (
  <Layout>
    <SEO title="Fixtures" />
    <p className="page-title">Fixtures</p>
    <div className="fixture-container">
      <FixtureBlock 
        details="Goodison Park 17:30 C.E.T"  
        image1={evelogo}  
        image2={whulogo}  
        name1="Everton F.C."  
        name2="West Ham United" 
        score="2-0">
      </FixtureBlock>
    </div>
  </Layout>
)

export default fixturesPage
