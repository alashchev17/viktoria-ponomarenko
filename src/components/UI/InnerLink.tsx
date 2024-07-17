import Link from 'next/link'
import { LinkArrow } from '@/components/Icons/LinkArrow'

type InnerLinkProps = {
  href: string
  text: string
  className?: string
}

export const InnerLink = ({ href, text, className }: InnerLinkProps) => {
  const classes = className ? className : 'text-bright-blue text-base inline-flex items-end gap-2'

  return (
    <Link href={href} className={classes}>
      {text}
      <LinkArrow />
    </Link>
  )
}
