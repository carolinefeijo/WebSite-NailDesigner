import React from 'react'
import './styles.css'

import check from '../../assets/icons/check.png'

export default function CardService({ service }) {
  const { details, img } = service

  console.log(service)

  return (
    <div className="containerCard">
      <div className="CardRow">
        <div className="CardColumn">
          <h2>{service.title}</h2>
          <h6>{service.subTitle}</h6>

          {details.map((item) => (
            <li>
              <img className="icon" src={check} alt="check" />
              {item}
            </li>
          ))}
        </div>

        <div style={{}}>
          <img
            style={{
              width: '650px',
              boxShadow: '0 25px 98px 0 rgb(0 0 0 / 10%)',
              borderTopLeftRadius: '70%',
              borderTopRightRadius: '30% 70%',
              borderBottomRightRadius: '30%',
              borderBottomLeftRadius: '70% 30%',
              verticalAlign: 'middle',
            }}
            src={img}
            alt="unha aplicação"
          />
        </div>
      </div>
    </div>
  )
}
