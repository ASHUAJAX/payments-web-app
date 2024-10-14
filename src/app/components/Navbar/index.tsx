import React from 'react'
import "./Navbar.scss";
import data from "./data.json";

function Navbar() {
  return (
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
  )
}

export default Navbar;