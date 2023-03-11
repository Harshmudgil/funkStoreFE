import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
      <div className="Categories">
        <h1>Categories</h1>
        <span className="item">Man</span>
        <span className="item">Women</span>
        <span className="item">Children</span>
        <span className="item">Accessories</span>
        <span className="item">New Arrivals</span>
      </div>
      <div className="Links">
        <h1>Links</h1>
        <span className="item">FAQ</span>
        <span className="item">Pages</span>
        <span className="item">Store</span>
        <span className="item">Compare</span>
        <span className="item">Cookies</span>
      </div>
      <div className="About">
        <h1>About</h1>
        <span className="item">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, est necessitatibus? Quisquam, molestias. Dicta culpa id corrupti, ducimus autem praesentium labore. Architecto tempore vitae consectetur quasi quos porro facere aliquid.</span>
      </div>
      <div className="Contact">
        <h1>Contact</h1>
        <span className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quam ipsa praesentium, autem fuga sint dolorum repellat aperiam mollitia inventore saepe repellendus, ab tempora ratione doloribus nulla impedit. Dignissimos, ut?</span>
      </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>FUnK StORE</span>
          <span className='copyright'>© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src='/image/payment.png' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer