'use client'

import React from 'react'

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'inline' | 'icon'
  id?: string
  href?: string
  action?: () => void
  children: React.ReactNode
}

const buttonClassNames = {
  primary: 'bg-primary text-white hover:bg-primary/80',
  secondary: 'bg-secondary text-white hover:bg-secondary/80',
  inline: 'uppercase font-sans text-sm text-bezh py-1 px-3 font-semibold border-2 border-bezh rounded-[10px]',
  icon: 'leading-none w-[40px] h-[40px] flex items-center justify-center border-2 border-bezh rounded-full',
}

export const Button = ({ children, variant, href, action, id = '' }: ButtonProps) => {
  if (href) {
    return (
      <a id={id} href={href} className={buttonClassNames[variant]} target="_blank">
        {children}
      </a>
    )
  }
  return (
    <button id={id} className={buttonClassNames[variant]} onClick={action}>
      {children}
    </button>
  )
}
