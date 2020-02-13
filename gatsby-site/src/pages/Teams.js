import React from "react"
import TeamCard from "../components/TeamCard"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ars from "../images/emirates.jpg"
import avl from "../images/Aston-Villa-stadium.jpg"
import bou from "../images/bournemouth-stadium.jpg"
import bha from "../images/brighton-stadium.jpg"
import bur from "../images/burnley-stadium.jpg"
import che from "../images/chelsea-stadium.jpg"

const teamsPage = () => (
  <Layout>
    <SEO title="Teams" />
      <p className = "page-title">Teams</p>
      <input type="text" placeholder="Search team..." className="search-field"></input>
      <div className ="card-container">
          <TeamCard image = {ars}  name = "Arsenal F.C." ></TeamCard>
          <TeamCard image = {avl}  name = "Aston Villa F.C." ></TeamCard>
          <TeamCard image = {bou}  name = "Bournemouth F.C." ></TeamCard>
          <TeamCard image = {bha}  name = "Brighton and Hove Albion F.C." ></TeamCard>
          <TeamCard image = {bur}  name = "Burnley F.C." ></TeamCard>
          <TeamCard image = {che}  name = "Chelsea F.C." ></TeamCard>
      </div>
  </Layout>
)

export default teamsPage
