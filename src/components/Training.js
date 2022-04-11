import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/griffith.JPG'
import Moon from '../assets/hollywood.JPG'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Values</h1>
                <p>Attention to detail and radical transparency are key to success. Run towards your pain points. Do better.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training