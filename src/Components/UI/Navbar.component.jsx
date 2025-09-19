/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaCoins } from 'react-icons/fa'
import './Navbar.css'

export default function Navbarcomponent() {

  const btnToggleRef = useRef();
  
  const toggleMenu=()=>{
    btnToggleRef.current.click()
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <span className='navbar-text'><FaCoins className='navbar-logo' /></span>
          <span className='name1'>   Crypto Tracking </span>

        </div>
        <button className="navbar-toggler" ref={btnToggleRef} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" onClick={toggleMenu} to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={toggleMenu} to="/FAQ">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={toggleMenu} to="/AboutUs">AboutUs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  onClick={toggleMenu} to="/Contact-us">Contact-us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
