import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>
            NEW BRANDS
        </h2>
        <div>
        <div className="hero-hand-icon">
        <p>new</p>
        <img src={hand_icon} alt="" />
        </div>
        <p>and</p>
        <p>Affordable brands for everyone</p>
        </div>
        <div className="hero_lastest_btn">
            <div>Latest Brands</div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero