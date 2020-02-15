import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import ars from "../images/emirates.jpg"
import avl from "../images/Aston-Villa-stadium.jpg"

const photos = [

  {
      name:"arsenal",
      src:ars
  },

  {
    name:"aston villa",
    src:avl
  }
]


class IndexPage extends React.Component{
  render(){
    const settings = {
      dots:false,
      fade:true,
      infinite:true,
      speed:750,
      slidesToShow:1,
      arrows:true,
      slidesToScroll:1,
      className:"slides"
    }
  return(
    <Layout>
      <SEO title="Home"/>
      <p className = "page-title">Home</p>
      <Slider {...settings}> 
        {photos.map((photo)=>{
          return(
            <div className="slider-container">
              <img width="100%" src={photo.src} className="slider-picture"/>
            </div>
          )
        })}

      </Slider>
    </Layout>
  );
 }
}


export default IndexPage
