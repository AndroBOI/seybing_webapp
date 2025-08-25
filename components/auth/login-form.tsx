import React from 'react'
import { Button } from '../ui/button'
import CardWrapper from './card-wrapper'

const LoginForm = () => {
  return (
    <CardWrapper
    headerLabel="Welcome back"
    backButtonLabel="Create an account"
    backButtonHref="/auth/register" 
    showSocial
    >
        <h1>Login Form</h1>
        <Button className='w-full'>Login</Button>
    </CardWrapper>
  )
}

export default LoginForm