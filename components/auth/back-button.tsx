import React from 'react'

import { Button } from "../ui/button"
import Link from "next/link";
import { link } from 'fs';

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
    >
        <Link href={href}>{label}</Link>
    </Button>
  )
}

export default BackButton