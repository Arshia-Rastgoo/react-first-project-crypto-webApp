import React from 'react'
import imageabout from '../Assets/images/about.png'
export default function AboutUspage() {
  return (
    <div className='container'>
      <div className="row">
        <div className='col-12 custom-bg  p-3 rounded ' >
          <h3>About us</h3>
        </div>
      </div >
      <div className='row  align-items-center' >
        <div className='col-md-7  rounded ' >
          Welcome to [Arshia s' Crypto tracking website] — your lightweight, real-time companion for tracking the crypto markets. Here, we believe everyone should have fast, reliable access to essential market data without the clutter. 
          Our mission is to empower traders, developers, and casual enthusiasts with a simple, no-nonsense tool that helps you make informed decisions in a rapidly changing crypto landscape.
          Whether you’re a trader testing a strategy, a developer looking for a lightweight data widget, or simply someone who loves clean crypto UI, we’d love to hear from you. Reach out at "Arshiarastgoo1@gmail.com" or through our social channels.
        </div>
        <div className='col-md-5 text-center  ' >
          <img src={imageabout} alt='About-us' className="img-fluid  about-img" ></img>
        </div>
      </div>



    </div>
  )
}
