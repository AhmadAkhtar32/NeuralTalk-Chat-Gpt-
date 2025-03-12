import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Rootlayout.css';

const RootLayout = () => {
    return (
        <div className='rootLayout'>
            <header>
                <Link to="/" className='logo'>
                    <img src="/logo.png" alt="NeuralTalk Logo" />
                    <span>NeuralTalk</span>
                </Link>
                <div className="user">User</div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
