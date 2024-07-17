import * as React from 'react'
import type { SVGProps } from 'react'

export const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 37 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M36.1258 24.2848L0.687012 48.4259L0.687014 0.143555L36.1258 24.2848Z" fill={props.fill || '#0C174F'} />
  </svg>
)
