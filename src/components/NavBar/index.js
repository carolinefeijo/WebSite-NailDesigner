import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.jpg'
import menu from '../../assets/icons/menu.png'

import ButtonContact from '../ButtonContact'

export const NavBar = () => {
  const [isActiveButton, setIsActiveButton] = useState(true)
  return (
    <nav className="navbar">
      <link rel="stylesheet" type="text/css" href="estilo.css" />

      <Link to="/">
        <img className="logo" src={logo} alt="Liziane Silva" />
      </Link>

      <ul className="list">
        <li className="item">
          <Link to="/">HOME</Link>
        </li>

        <li className="item">
          <Link to="/services">SERVIÇOS</Link>
        </li>

        <li className="item">
          <Link to="/aboutMe">QUEM SOU</Link>
        </li>

        <li className="item">
          <Link to="/localization">LOCALIZAÇÃO</Link>
        </li>

        <li className="item">
          <ButtonContact />
        </li>
      </ul>

      <nav>
        <ul className= {!isActiveButton ? "menuDisable":  "menu" }>
          <li>
            <button onClick={()=> {setIsActiveButton(isActiveButton ? false : true)}}>
              <img src={menu} alt="logo" />
            </button>

            <ul>
              <li>
                <a href="./">HOME</a>
              </li>
              <li>
                <a href="./services">SERVIÇOS</a>
              </li>
              <li>
                <a href="#">QUEM SOU</a>
              </li>
              <li>
                <a href="#">LOCALIZAÇÃO</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </nav>
  )
}
