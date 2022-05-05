import React from 'react'
import logo from '../assets/ecommerce-product-page-main/images/logo.svg'
import cartIcon from '../assets/ecommerce-product-page-main/images/icon-cart.svg'
import avatar from '../assets/ecommerce-product-page-main/images/image-avatar.png'
import './css/nav.css'

const Navbar = () => {
    return (
        <nav>
        <div id="logo">
            <img src={logo} alt="" />
        </div>
        <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="profile-cart">
            <button id="cart">
                <img src={cartIcon} alt="cart Icon"/>
            </button>
            <div id="profile">
                <figure>
                    <img src={avatar} alt="avatar "/>
                </figure>
            </div>
        </div>

        </nav>
    )
}

export default Navbar
