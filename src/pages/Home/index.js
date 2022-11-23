import React from 'react'
import './styles.css'

import nails from '../../assets/img/nails.jpg'

export const Home = () => {
  return (
    <div className="container-home">
      <img className="img-unha" src={nails} alt="Liziane Silva" />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>aqui componetn </h1>
      </div>
    </div>
  )
}
