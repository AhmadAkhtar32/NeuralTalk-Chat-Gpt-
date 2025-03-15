import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

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
                    <div className="chat">
                        <img src="/bot.png" alt="" />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'We produce food for Mice',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'We produce food for Hamsters',
                                1000,
                                'We produce food for Guinea Pigs',
                                1000,
                                'We produce food for Chinchillas',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
