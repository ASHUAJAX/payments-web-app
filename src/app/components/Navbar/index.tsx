import React from 'react'
import "./Navbar.scss";
import data from "./data.json";

function Navbar() {
  return (
    <div className='Navbar'>
      <nav className='Navbar_Wrapper'>
        <div className='Navbar_Wrapper_logo'></div>
        <ul>
          {
            data.map((elm, ix) => (
              <li key={ix}><a href={elm.link}>{elm.name}</a></li>
            ))
          }
        </ul>
      </nav>


    </div>
  )
}

export default Navbar;