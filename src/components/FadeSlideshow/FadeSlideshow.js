import React from "react"
import { Fade } from 'react-slideshow-image';
import homeslide from '../../images/home-slide-1.jpg';
import homeslide2 from '../../images/home-slide-2.jpg';
import homeslide3 from '../../images/home-slide-3.jpg';
import homeslide4 from '../../images/home-slide-4.jpg';
import homeslide5 from '../../images/home-slide-5.jpg';
 
const fadeImages = [
  homeslide,
  homeslide2,
  homeslide3,
  homeslide4,
  homeslide5
];
 
const fadeProperties = {
  autoplay: true,
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false
}
 
const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} alt="" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} alt="" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} alt="" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[3]} alt="" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[4]} alt="" />
        </div>
      </div>
    </Fade>
  )
}

export default Slideshow;