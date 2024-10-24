import React from 'react'

type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 'auto'
  className?: string
  children: React.ReactNode
}

const titleStyles = {
  1: 'text-4xl lg:text-5xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
  5: 'text-lg',
  6: 'text-base lg:text-2xl',
  auto: '',
}

export const Title = ({ level, children, className = '' }: TitleProps) => {
  const Tag = `h${typeof level === 'number' ? level : 1}` as keyof JSX.IntrinsicElements
  const titleClassName = titleStyles[level]

  return <Tag className={`${className} ${titleClassName}`}>{children}</Tag>
}
