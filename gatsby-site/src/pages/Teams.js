import React from "react"
import TeamCard from "../components/TeamCard"
import { useState } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer"
/*import ars from "../images/stadiums/emirates.jpg"
import avl from "../images/stadiums/Aston-Villa-stadium.jpg"
import bou from "../images/stadiums/bournemouth-stadium.jpg"
import bha from "../images/stadiums/brighton-stadium.jpg"
import bur from "../images/stadiums/burnley-stadium.jpg"
import che from "../images/stadiums/chelsea-stadium.jpg"*/

const TeamsPage = ({ data }) => {


  console.log(data);
  const [filterValue, setFilterValue] = useState("");

  function callback(e) {
    setFilterValue(e.target.value)
  }

  console.log(filterValue);

  const filtered = data.allFile.edges.filter(node => {
    return node.node.childImageSharp.fluid.originalName.substring(0, node.node.childImageSharp.fluid.originalName.length - 4).toLowerCase().includes(filterValue.toLowerCase())
  })

  let temp = <div> No teams found!</div>

  if (filtered.length !== 0) {
    temp = filtered.map((node) => {
      console.log(node);
      return <TeamCard key={node.node["id"]} image={node.node.childImageSharp.fluid} name={node.node.childImageSharp.fluid.originalName.substring(0, node.node.childImageSharp.fluid.originalName.length - 4)} />
    })
  }

  console.log("asdasd", filtered);



  return (
    <Layout>
      <SEO title="Teams" />
      <p className="page-title">Teams</p>
      <input onChange={callback} type="text" placeholder="Search team..." className="search-field"></input>
      <div className="card-container">
        {temp}
      </div>
      <Footer></Footer>
    </Layout>
  )
}

export default TeamsPage

export const query = graphql`
{
    allFile(filter: {absolutePath: {regex: "//src/images/stadiums//"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
    }
  }
  `