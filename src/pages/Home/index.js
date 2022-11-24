import React from 'react'
import './styles.css'

import application from '../../assets/img/Nails/aplication.jpg'
import maintenance from '../../assets/img/Nails/maintenance.jpg'
import decoration from '../../assets/img/Nails/decoration.jpg'
import armor from '../../assets/img/Nails/armor.jpg'

import nails from '../../assets/img/nails.jpg'
import CardService from '../../components/CardService'

export const Home = () => {
  const servicesList = [
    {
      title: 'Aplicação',
      subTitle: 'Alongamento de Fibra de Vidro no molde',
      img: application,
      details: [
        'Unha resistente',
        'Formatos variados: ( Almond, Stilleto, Quadrada e Bailarina)',
        'Naturalidade',
        'Esmalte não descama',
      ],
    },
    {
      title: 'Manutenção',
      subTitle: 'Realização mensalmente',
      img: maintenance,
      details: [
        'Retirada de 80% gel antigo',
        'Reaplicação de gel',
        'Reaplicação de fibra',
      ],
    },
    {
      title: 'Decoração',
      subTitle: 'Técnicas de efeitos',
      img: decoration,
      details: [
        'Baby Boomer',
        'Encapsulada',
        'Francesa Permanente',
        'Francesa Reversa',
      ],
    },
    {
      title: 'Blindagem de Fibra',
      subTitle: 'Realizada na Unha Natural',
      img: armor,
      details: [
        'Não precisa alongar',
        'Unha resistente',
        'Esmalte não descama',
      ],
    },
  ]
  return (
    <div className="container-home">
      <img className="img-unha" src={nails} alt="Liziane Silva" />

      {servicesList.map((service) => (
        <CardService service={service} key={service.title} />
      ))}
    </div>
  )
}
