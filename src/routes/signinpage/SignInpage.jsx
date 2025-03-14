import React from 'react'
import './SignInpage.css'
import { SignIn } from '@clerk/clerk-react'

const SignInpage = () => {
    return (
        <div className='signInPage'>
            <SignIn path='/sign-in' signUpUrl='/sign-up' />
        </div>
    )
}

export default SignInpage