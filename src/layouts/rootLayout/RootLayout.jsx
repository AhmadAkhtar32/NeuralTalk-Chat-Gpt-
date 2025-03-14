import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Rootlayout.css';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
    return (

        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">

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
        </ClerkProvider>
    );
};

export default RootLayout;
