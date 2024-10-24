import * as React from 'react'
import type { SVGProps } from 'react'

export const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 16" {...props}>
    <g>
      <path
        d="m12 2-1.4 1.4L16.2 9H0v2h16.2l-5.6 5.6L12 18l8-8z"
        fill={props.fill}
        opacity={1}
        data-original={props.fill}
      />
    </g>
  </svg>
)
