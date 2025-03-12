import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Rootlayout.css';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Link to="/">
                    <img src="/logo.png" alt="NeuralTalk Logo" />
                    <span>NeuralTalk</span>
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
