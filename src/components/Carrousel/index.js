import React from 'react';
import './styles.css'

import nail1 from '../../assets/Popular/nail1.jpg';
import nail2 from '../../assets/Popular/nail2.jpg';
import nail3 from '../../assets/Popular/nail3.jpg';
import nail4 from '../../assets/Popular/nail4.jpg';
import nail5 from '../../assets/Popular/nail5.jpg';
import nail6 from '../../assets/Popular/nail6.jpg';
import nail7 from '../../assets/Popular/nail7.jpg';
import nail8 from '../../assets/Popular/nail8.jpg';
import nail9 from '../../assets/Popular/nail9.jpg';
import nail10 from '../../assets/Popular/nail10.jpg';


import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Carrousel() {
    return (
        <div className='carrousel-container'>
            <h2 className='title-carrousel'>Um pouco do meu trabalho  ❤</h2>
            <Carousel  >
                <Carousel.Item interval={50}>
                    <img className='img-item-carrousel'
                        src={nail10}
                        alt="Image One"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-item-carrousel'
                        src={nail2}
                        alt="Image Two"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-item-carrousel'
                        src={nail3}
                        alt="Image Two"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}