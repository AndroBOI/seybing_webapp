"use client"

interface LoginButtonProps {
    children: React.ReactNode;
}

import { useRouter } from 'next/navigation';
import React from 'react'

const LoginButton = ({
    children
}: LoginButtonProps) => {

    const router = useRouter()

    const onClick = () => {
        router.push('/auth/login')
    }


  return (
    <span onClick={onClick} className='cursor-pointer'>
            {children}
    </span>
  )
}

export default LoginButton