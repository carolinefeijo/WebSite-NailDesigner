import client1 from '../assets/img/Client/client1.jpg'
import client2 from '../assets/img/Client/client2.jpg'
import client3 from '../assets/img/Client/client3.jpg'
import client4 from '../assets/img/Client/client4.jpg'
import client5 from '../assets/img/Client/client5.jpg'

import application from '../assets/img/Nails/aplication.jpg'
import maintenance from '../assets/img/Nails/maintenance.jpg'
import decoration from '../assets/img/Nails/decoration.jpg'
import armor from '../assets/img/Nails/armor.jpg'

export const slides = [
  {
    img: client1,
    name: 'Angelica',
    type: 'Cliente',
    description:
      'A Liziane é uma profissional maravilhosa, super atenciosa e caprichosa. Sou cliente fiel e não troco ela por nadinha nesse mundo. Eu sou completamente apaixonada pelo trabalho dela e as unhas ficam maravilhosas.  Tem uma ótima durabilidade, delicadeza e sem contar o preço justo ♡',
  },

  {
    img: client4,
    name: 'Caroline',
    type: 'Cliente',
    description:
      'É impossivel não gostar do trabalho dela, é simplesmente o melhor que eu conheço. O atendimento é maravilhoso.',
  },

  {
    img: client5,
    name: 'Bruna',
    type: 'Cliente',
    description:
      'Sempre que faço minhas unhas com ela, a durabilidade é impressionante, apaixonada.',
  },
]

export const servicesList = [
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
    details: ['Não precisa alongar', 'Unha resistente', 'Esmalte não descama'],
  },
]
