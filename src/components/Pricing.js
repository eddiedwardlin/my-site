import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- La La Land -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Fun</p>
                    <p>- 1 Day -</p>
                    <p>- Spring 22 -</p>
                    <p>- Brotherhood -</p>
                    <p>- Los Angeles -</p>
                    <Link to='/contact' className='btn'>Join</Link>
                </div>
                <div className='card'>
                    <h3>- Vegas Baby -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Fun</p>
                    <p>- 2 Days -</p>
                    <p>- Spring 22 -</p>
                    <p>- Brotherhood -</p>
                    <p>- Las Vegas -</p>
                    <Link to='/contact' className='btn'>Join</Link>
                </div>
                <div className='card'>
                    <h3>- Mission -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Fun</p>
                    <p>- 2 Days -</p>
                    <p>- Spring 22 -</p>
                    <p>- Brotherhood -</p>
                    <p>- Somewhere in the woods -</p>
                    <Link to='/contact' className='btn'>Join</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
