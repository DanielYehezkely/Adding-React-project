import React from 'react'

import logo from '/public/assets/logo_light.png'
import SubmitForm from './SubmitForm'
import SiteLinks from './SiteLinks'

const Footer = () => {
  return (
    <footer id="main-footer" className="py-2">
    <div className="container footer-container">
      <div>
        <img src={logo} alt="NewsGrid" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          deserunt assumenda enim non? Ratione ipsum voluptates fuga eos earum
          vitae.
        </p>
      </div>
      <div>
        <SubmitForm/>
      </div>
        <SiteLinks/>
      <div>
        <h2>Join Our Club</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          nesciunt!
        </p>
        <a href="/src/pages/Register.jsx" className="btn btn-secondary">
          Join Now
        </a>
      </div>
      <div>
        <p>Copyright © 2019, All Rights Reserved</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer