import React from 'react'
import './styles.css'

import facebook from '../../assets/icons/nets/facebook.png'
import instagran from '../../assets/icons/nets/instagran.png'

export default function TeamSociais() {


    return (
        <div className='container-redes' >
            <div className='main-redes-container'>
                <div className='card-redes'>
                    <a href='https://www.facebook.com/profile.php?id=100004621325427'>
                        <img className='icon-facebook' src={facebook} alt="icone do facebook" />
                    </a>
                </div>

                <div className='card-redes'>
                    <a href='https://www.instagram.com/lizzy.n.a.i.l.s/'>
                        <img className='icon-facebook' src={instagran} alt="icone do facebook" />
                    </a>
                </div>
            </div>
        </div>
    )
}