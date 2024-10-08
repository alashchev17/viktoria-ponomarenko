import React from 'react'

type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  children: React.ReactNode
}

const titleStyles = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
  5: 'text-lg',
  6: 'text-base',
}

export const Title = ({ level, children, className = '' }: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const titleClassName = titleStyles[level]

  return <Tag className={`${titleClassName} ${className}`}>{children}</Tag>
}
