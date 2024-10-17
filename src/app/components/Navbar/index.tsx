"use client"
import React, { useEffect, useState } from 'react'
import "./Navbar.scss";
import data from "./data.json";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Link from 'next/link';

function Navbar() {

  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
 const[isTransparentNav,setIsTransparentNav]=useState(false);

  const mobileNavActiveToggler = () => {
    setIsMobileNavActive((prev: boolean) => !prev);
  }

  useEffect(()=>{
if(window.location.pathname === "/"){
  setIsTransparentNav(true);
}else{
  setIsTransparentNav(false);
}
  },[]);

  return (
    <>
      <div className={`Navbar ${isTransparentNav && 'transparentNav'}`}>
        <nav className='Navbar_Wrapper'>
          <div className='Navbar_Wrapper_logo'>
            <h1> <Link href={data[0].link}>PayWeb</Link></h1>
          </div>
          <div className='Navbar_Wrapper_navContainer'>
            <ul>
              {
                data.map((elm, ix) => (
                  <li key={ix}><Link href={elm.link}>{elm.name}</Link></li>
                ))
              }
            </ul>
          </div>

        </nav>
      </div>

      <div className={`MobileNavbar ${isTransparentNav && 'transparentNav'}`} >
        <nav className='MobileNavbar_Wrapper'>
          <div className='MobileNavbar_Wrapper_logo'>
            <h1> <Link href={data[0].link}>PayWeb</Link></h1>
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
                 <Link href={elm.link}>{elm.name}</Link>
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