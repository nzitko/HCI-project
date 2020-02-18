import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../components/layout.css"
import Slider from "react-slick"
import Footer from "../components/Footer"
import ars from "../images/stadiums/Arsenal FC.jpg"
import avl from "../images/stadiums/Aston Villa FC.jpg"
import bou from "../images/stadiums/Bournemouth FC.jpg"
import bha from "../images/stadiums/Brighton FC.jpg"
import che from "../images/stadiums/Chelsea FC.jpg"
import manulogo from "../images/logos/manchester-united-logo.png"
import livlogo from "../images/logos/Liverpool.png"


const photos = [
  {
    name: "arsenal",
    src: ars
  },

  {
    name: "aston villa",
    src: avl
  },

  {
    name: "bournemouth",
    src: bou
  },
  {
    name: "brighton",
    src: bha
  },
  {
    name: "chelsea",
    src: che
  }
]

class IndexPage extends React.Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides"
    }
    return (
      <Layout>
        <SEO title="Home" />
        <p className="page-title">Home</p>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div className="slider-container">
                <img src={photo.src} className="slider-picture" />
              </div>
            )
          })}
        </Slider>
        <p className="game-to-watch-text">Game to watch</p>
        <div className="game-to-watch-container">
          <img className="game-to-watch-image1" src={manulogo} />
          <span class="game-to-watch-span"> MUFC  <em>vs</em>  LFC</span>
          <img className="game-to-watch-image2" src={livlogo} />
        </div>
        <p className="game-to-watch-info">Old Trafford SUN 16:30 CET</p>
        <Footer></Footer>
      </Layout>
    );
  }
}
export default IndexPage


