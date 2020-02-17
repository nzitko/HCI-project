import React from "react"
//import { Link } from "gatsby"
//import Navigation from "../components/navigation"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const playersPage = ({ data }) => {

  console.log("jeeeeebo", data);

  console.log("aaaaa", data.playerImage.edges);

  let temp = data.playerImage.edges.map((node) => {
    console.log("bbb", node)
    let metadata_filtered = data.playerData.edges[0].node.childrenDataYaml
      .filter((metadata => metadata['key'] === node.node.childImageSharp.fluid.src));
    console.log("CARD - Ovo je filtrirana metadata: ", metadata_filtered);
  });

  return (
    <div>
      <Layout>
        <SEO title="Players" />
      </Layout>
      <p className="page-title">Players</p>
    </div>
  )
}

export default playersPage

export const query = graphql`
  {
    playerImage:allFile(filter: {absolutePath: {regex: "//src/images/players//"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  playerData:allFile(filter: {absolutePath: {regex: "//src/PlayerData//"}}) {
    edges {
      node {
        id
        childrenDataYaml {
          name
          price
          key
          description
          link
          producer
          class
          age
        }
      }
    }
  }
}
`
