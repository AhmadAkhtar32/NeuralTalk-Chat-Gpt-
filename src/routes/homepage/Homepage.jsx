import React, { useState } from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const Homepage = () => {

    const [typingStatus, setTypingStatus] = useState("Human1")

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
                        <img src={typingStatus === "Human1" ? "/human1.jpeg" : typingStatus === "Human2" ? "/human2.jpeg" : "bot.png"} alt="" />
                        <TypeAnimation
                            sequence={[
                                "Human: We produce food for mice.",
                                2000, () => {
                                    setTypingStatus("Bot")
                                },
                                "Bot: We produce food for Hamsters.",
                                2000, () => {
                                    setTypingStatus("Human2")
                                },
                                "Human: We produce food for Humans",
                                2000, () => {
                                    setTypingStatus("Bot")
                                },
                                "Bot: We produce food for Computers",
                                2000, () => {
                                    setTypingStatus("Human1")
                                }
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation={true}
                        />
                    </div>
                </div>
            </div>

            <div className="terms">
                <img src="/logo.png" alt="" />
                <div className="links">
                    <Link to="/">Terms of Service</Link>
                    <span>|</span>
                    <Link to="/">Privacy Policy</Link>

                </div>
            </div>

        </div>
    )
}

export default Homepage
