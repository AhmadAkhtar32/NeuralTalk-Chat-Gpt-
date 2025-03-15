import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='homepage'>
            <img src="/orbital.png" alt="img not found" className='orbital' />
            <div className="left">
                <h1>NeuralTalks</h1>
                <h2>Seamless Chat. Limitless Possibilities.</h2>
                <h3>Your personal AI companion, ready to chat anytime. NeuralTalk listens, learns, and responds with intelligence.</h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg">

                        </div>
                    </div>
                    <img src="/bot.png" alt="img not found" className='bot' />
                </div>
            </div>
        </div>
    )
}

export default Homepage
