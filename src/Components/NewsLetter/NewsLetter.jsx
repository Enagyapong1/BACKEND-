import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email
          <br />
        <p>Subscribe to our newsletter and stay updated</p>
        </h1>
    <div>
        <input type="email" name="" id="" placeholder='Your email id' />
        <button>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetter;