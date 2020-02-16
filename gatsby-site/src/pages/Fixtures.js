import React from "react"
import FixtureBlock from "../components/FixtureBlock"
import Layout from "../components/layout"
import SEO from "../components/seo"
import evelogo from "../images/logos/everton-logo.png"
import whulogo from "../images/logos/west-ham-logo.png"

const fixturesPage = () => (
  <Layout>
    <SEO title="Fixtures" />
    <p className="page-title">Fixtures</p>
    <div className="fixture-container-1">
    <p className="fixture-details">Goodison park SAT 17:30 C.E.T</p>
      <FixtureBlock 
        image1={evelogo}  
        image2={whulogo}  
        name1="Everton F.C."  
        name2="West Ham United" 
        score="2:0">
      </FixtureBlock>
      </div>
      <div className="fixture-container-2">
      <p className="fixture-details">Goodison park SAT 17:30 C.E.T</p>
      <FixtureBlock 
        image1={evelogo}  
        image2={whulogo}  
        name1="Everton F.C."  
        name2="West Ham United" 
        score="2:0">
      </FixtureBlock>
      </div>
  </Layout>
)

export default fixturesPage
