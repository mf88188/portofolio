import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Faizan Aslam</strong>, professional
        <br />
        Architectural 3D Visualization
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
