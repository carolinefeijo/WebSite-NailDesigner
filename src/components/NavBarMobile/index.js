import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.jpg'
import menu from '../../assets/icons/menu.jpg'

import ButtonSecundar from '../ButtonSecundar'

export const NavBarMobile = () => {
  const [isActiveButton, setIsActiveButton] = useState(false)

  return (
    <nav className="navbarMobile">
      <Link to="/">
        <img className="logo" src={logo} alt="Liziane Silva" />
      </Link>

      <ul className={!isActiveButton ? 'menuDisable' : 'menu'}>
        <li>
          <button
            className="buttonSeletor"
            onClick={() => {
              setIsActiveButton(isActiveButton ? false : true)
            }}
          >
            <img className="iconButton" src={menu} alt="icone" />
          </button>

          <ul>
            <li>
              <a href="./">HOME</a>
            </li>

            <li>
              <a href="./services">SERVIÇOS</a>
            </li>

            <li>
              <a href="/aboutMe">QUEM SOU</a>
            </li>

            <li>
              <a href="./localization">LOCALIZAÇÃO</a>
            </li>

            <li>
              <ButtonSecundar />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
