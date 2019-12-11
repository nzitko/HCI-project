import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
    </Layout>
    <p className = "page-title">Home</p>
  </div>
)// sve sta wrappas u Layout se stavi u objekt koji ima svoj propety s nazivom CHILDREN u koji se to sve pohrani

export default IndexPage
