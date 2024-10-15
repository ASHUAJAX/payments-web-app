"use client"
import React, { useState } from 'react'
import "./Navbar.scss";
import data from "./data.json";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Navbar() {

  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const mobileNavActiveToggler = () => {
    setIsMobileNavActive((prev: boolean) => !prev);
  }
  return (
    <>
      <div className='Navbar'>
        <nav className='Navbar_Wrapper'>
          <div className='Navbar_Wrapper_logo'>
            <h1> <a href={data[0].link}>PayWeb</a></h1>
          </div>
          <div className='Navbar_Wrapper_navContainer'>
            <ul>
              {
                data.map((elm, ix) => (
                  <li key={ix}><a href={elm.link}>{elm.name}</a></li>
                ))
              }
            </ul>
          </div>

        </nav>
      </div>

      <div className='MobileNavbar'>
        <nav className='MobileNavbar_Wrapper'>
          <div className='MobileNavbar_Wrapper_logo'>
            <h1> <a href={data[0].link}>PayWeb</a></h1>
          </div>
          <div className='MobileNavbar_Wrapper_navContainer' onClick={mobileNavActiveToggler}>
            <MenuOpenIcon />
          </div>
        </nav>

        {/* mobile menu  */}
        <div className={`mobileMenu_wrapper ${isMobileNavActive && 'mobileMenu_active'}`}>
          <nav className="mobileMenu_wrapper_nav">
            <div className="mobileMenu_wrapper_nav_header">
              <div className="mobileMenu_wrapper_nav_header_icon" onClick={mobileNavActiveToggler}>
                <ArrowBackIcon />
              </div>
            </div>

            <ul>
              {data.map((elm, index) => {
                return (
                  <li
                    key={index}
                  >
                 <a href={elm.link}>{elm.name}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

    </>

  )
}

export default Navbar;