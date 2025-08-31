import React from 'react'

import { Button } from "../ui/button"
import Link from "next/link";

interface BackButtonProps {
    href: string;
    label: string
}


const BackButton = ({
    href, label
}: BackButtonProps) => {
  return (
    <Button
    variant="link"
    asChild
    className='w-full flex justify-center items-center'
    >
        <Link href={href}>{label}</Link>
    </Button>
  )
}

export default BackButton