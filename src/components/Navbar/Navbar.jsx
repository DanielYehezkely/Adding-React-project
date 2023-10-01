import React from 'react'

import { links } from '/src/components/Data.js'
import logo from '/public/assets/logo.png'


const Navbar = () => {
  return (
    <nav id="main-nav">
      <div className="container">
        <img src={logo} alt="NewsGrid" className="logo" />
        <div className="social">
          {links.map((link) => {
            const { id, url, iconClass } = link;
            return (
              <a
                key={id}
                href={url}
                target="_blank">
                <i className={iconClass}></i>
              </a>
            )
          })}
        </div>
        <ul>
          <li>
            <a className="current" href="/src/pages/Home.jsx">
              Home
            </a>
          </li>
          <li>
            <a href="About.jsx">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )


}

export default Navbar