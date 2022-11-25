import React from 'react'
import './styles.css'

import { slides, servicesList } from '../../data/mock'

import CardService from '../../components/CardService'
import { CardSlides } from '../../components/CardSlides'

import nails from '../../assets/img/nails.jpg'

export const Home = () => {
  return (
    <div className="container-home">
      <img className="img-unha" src={nails} alt="Liziane Silva" />

      {servicesList.map((service) => (
        <CardService service={service} key={service.title} />
      ))}

      <div className="container-titles">
        <h2 className="title-depositions">Depoimentos de Clientes</h2>
        <h6 className="title-depositions-secundary">
          Conheça um pouco a opinião de minhas clientes. Tenho certeza que você
          irá se surpreender!
        </h6>
      </div>
      <div className="container-card-container">
        {slides.map((client) => (
          <CardSlides client={client} key={client.name} />
        ))}
      </div>
    </div>
  )
}
