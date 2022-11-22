import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.jpg'
import ButtonContact from '../ButtonContact'

export const NavBarPrimary = () => {

  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo1" src={logo} alt="Liziane Silva" />
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
    </nav>
  )
}
