import React from 'react';

import { Carousel } from 'react-carousel-minimal';
import { data } from '../../data/mock';


export default function Carrousel() {
    return (
        <Carousel
            data={data}
            time={5000}
            width="950px"
            height="480px"
            radius="10px"
            automatic={true}
            slideImageFit="cover"
            thumbnails={true}
        />
    );
}