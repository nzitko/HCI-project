import React, { useState, useEffect } from "react"
//import { Link } from "gatsby"
//import Navigation from "../components/navigation"
import Pagination from "../components/pagination"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import "../components/layout.css"

const SocialPage = ({ data }) => {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  let temp = data.allMdx.edges.map((node, index) => {
    return <div className="blog-post" key={index}>
      <div className="blog-info">
        <h2>{node.node.frontmatter.title}</h2>
        <h4>Author: {node.node.frontmatter.author}</h4>
        <h4>Date: {node.node.frontmatter.date}</h4>
      </div>
      <MDXRenderer>{node.node.body}</MDXRenderer>
    </div>
  })

  useEffect(() => { setPosts(temp) }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Layout>
        <SEO title="Social" />
      </Layout>
      <div>
        <p className="page-title">Social</p>
        <div className="blog-container">
          <button className="addBlog-button">ADD BLOG</button>
          <div className="blog-grid">{currentPosts}</div>
          <div className="pagination-element"><Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} /></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
};

export default SocialPage

export const query = graphql`{
    allMdx(filter: {fileAbsolutePath: {regex: "/src/Posts//"}}) {
      edges {
        node {
          body
          frontmatter {
            title
            author
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
}`