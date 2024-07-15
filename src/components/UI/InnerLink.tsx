import Link from 'next/link'

type InnerLinkProps = {
  href: string
  text: string
  className?: string
}

export const InnerLink = ({ href, text, className }: InnerLinkProps) => {
  const classes = className ? className : 'text-bright-blue text-base'

  return (
    <Link href={href} className={classes}>
      {text}
    </Link>
  )
}
