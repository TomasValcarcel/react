import React from 'react'
import './navBar.css'; 
import logo from '../images/logo.png'; 
import cartImg from '../images/cart.png'; 
function navBar() {
    return (
      <nav className="nav">
        <div>
          <a href='#'><img src={logo} alt="Logo" className="logo"/></a>
        </div>
        <div>
          <ul className="nav-menu">
            <li className="nav-buttons"><a href="#">Inicio</a></li>
            <li className="nav-buttons"><a href="#">Productos</a></li>
            <li className="nav-buttons"><a href="#">La Comu</a></li>
            <li className="nav-buttons"><a href="#">Coleccion</a></li>
          </ul>
        </div>
        <div>
          <a href="#"><img src={cartImg} alt="Cart" className="cart-image"/></a>
        </div>
      </nav>
  )
}

export default navBar