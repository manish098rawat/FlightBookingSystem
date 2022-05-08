import React from 'react'
import './SelectsStyles.css'


import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import KeyWest from '../../assets/keywest.jpg'
import Switzerland from '../../assets/Switzerland.jpeg'
import Paris from '../../assets/Paris.jpg'
import Russia from '../../assets/Russia.jpg'
import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Switzerland} text='Switzerland' />
                <SelectsImg bgImg={BoraBora2} text='Emerald Bay' />
                <SelectsImg bgImg={Maldives} text='Maldives' />
                <SelectsImg bgImg={Paris} text='Paris' />
                <SelectsImg bgImg={Russia} text='Russia' />
                <SelectsImg bgImg={KeyWest} text='Key West' />
            </div>
<br/>
        </div>
    )
}

export default Selects;