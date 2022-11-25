import React from 'react'
import './styles.css'

export const CardSlides = ({ client }) => {
  return (
    <div className="card-container">
      <div className="card-container-top">
        <img className="img-client" src={client.img} alt="cliente" />
        <div className="client-container">
          <h5>{client.name}</h5>
          <p className="client-label">{client.type} </p>
        </div>
      </div>

      <div className="message-client-container">
        <p>{client.description}</p>
      </div>
    </div>
  )
}
