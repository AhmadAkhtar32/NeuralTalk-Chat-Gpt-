import React from 'react'
import './SignInpage.css'
import { SignIn } from '@clerk/clerk-react'

const SignInpage = () => {
    return (
        <div className='signInPage'><SignIn /></div>
    )
}

export default SignInpage