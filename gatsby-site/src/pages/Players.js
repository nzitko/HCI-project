import React from "react"
//import { Link } from "gatsby"
//import Navigation from "../components/navigation"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PlayerCard from "../components/PlayerCard"
import Footer from "../components/Footer"

const playersPage = ({ data }) => {

  console.log("jeeeeebo", data);

  console.log("aaaaa", data.playerImage.edges);

  let temp = data.playerImage.edges.map((node) => {
    console.log("bbb", node)
    let metadata_filtered = data.playerData.edges[0].node.childrenDataYaml
      .filter((metadata => metadata['key'] === node.node.childImageSharp.fluid.src));
    console.log("node", node);
    console.log("CARD - Ovo je filtrirana metadata: ", metadata_filtered);
    console.log("fffff", node.node["id"]);
    console.log("ggggg", node.node.childImageSharp.fluid);
    return <PlayerCard key={node.node["id"]} image={node.node.childImageSharp.fluid} metadata={metadata_filtered}></PlayerCard>
  });

  return (
    <div>
      <Layout>
        <SEO title="Players" />
        <p className="page-title">Players</p>
        <div className="player-card-container">
          {temp}
        </div>
        <Footer></Footer>
      </Layout>

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
          nationality
          name
          key
          position
          club
        }
      }
    }
  }
}
`
