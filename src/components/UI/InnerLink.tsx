'use client'

import { LinkArrow } from '@/components/Icons/LinkArrow'

type InnerLinkProps = {
  text: string
  className?: string
  onClick?: () => void
}

export const InnerLink = ({ text, className, onClick }: InnerLinkProps) => {
  const classes = className ? className : 'text-bright-blue text-base inline-flex items-end gap-2'

  return (
    <button onClick={onClick} className={classes}>
      {text}
      <LinkArrow />
    </button>
  )
}
