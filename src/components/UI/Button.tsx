'use client'

import React from 'react'

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'inline' | 'icon'
  id?: string
  href?: string
  action?: () => void
  className?: string
  children: React.ReactNode
}

const buttonClassNames = {
  primary:
    'text-center bg-bezh text-dark-blue font-bold text-base w-full py-6 leading-tight uppercase border-[3px] border-dark-blue rounded-[calc(12px-3px)]',
  secondary: 'bg-secondary text-white hover:bg-secondary/80',
  inline: 'uppercase font-sans text-sm text-bezh py-1 px-3 font-semibold border-2 border-bezh rounded-[10px]',
  icon: 'leading-none py-2 px-2 flex items-center justify-center border-2 border-bezh rounded-full aspect-square',
}

export const Button = ({ children, variant, href, action, id = '', className = '' }: ButtonProps) => {
  if (href) {
    return (
      <a id={id} href={href} className={`${buttonClassNames[variant]} ${className}`} target="_blank">
        {children}
      </a>
    )
  }
  return (
    <button id={id} className={`${buttonClassNames[variant]} ${className}`} onClick={action}>
      {children}
    </button>
  )
}
