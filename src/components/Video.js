import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import vegasVideo from '../assets/vegas.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={vegasVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Spring 22</h1>
            <p>Breakthrough.</p>
            <div>
                <Link to='/training' className='btn'>Values</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Video