/* ChatList file */
import React from 'react'
import "./chatList.css";
import { Link } from 'react-router-dom';


const ChatList = () => {
    return (
        <div>
            <span className='title '>Dashboard</span>

            <Link to="/dashboard">Create A New Chat</Link>
            <Link to="/">Explore NeuralTalk</Link>
            <Link to="/">Contact</Link>
            <hr />
            <span className='title '>RECENT CHATS</span>
            <div className="list">
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
                <Link to="/">My Chat Title</Link>
            </div>
            <hr />
            <div className="upgrade">
                <img src="/logo.png" alt="img not found" />
                <div className="texts">
                    <span>Upgrade to Pro</span>
                    <span>Unlock all features</span>
                </div>
            </div>

        </div>
    )
}

export default ChatList