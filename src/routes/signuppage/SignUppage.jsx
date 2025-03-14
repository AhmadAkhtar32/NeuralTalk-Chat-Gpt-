import React from 'react'
import './SignUppage.css'
import { SignUp } from '@clerk/clerk-react'

const SignUppage = () => {
    return (
        <div><SignUp path='/sign-up' signInUrl='/sign-in' /></div>
    )
}

export default SignUppage