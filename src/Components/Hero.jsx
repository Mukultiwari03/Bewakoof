import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import '../Css/Herosec.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HeroSec(props) {
  let a=props.show;
  console.log(typeof(a));
  var [settings,setsettings]=useState({ 
    dots: true,
    infinite: true,
    slidesToShow:a,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    cssEase: "linear"
   })
  return (
    <div>
      <Container  fluid>
      <div className="slider-container">
      <Slider {...settings}>
        {
            props.data.map((e)=>{
                return <img src={e.image} height={props.height} width={props.width}  alt='imgae'/>
            })
        }
        </Slider>
        </div>
      </Container>
    </div>
  )
}

export default HeroSec
