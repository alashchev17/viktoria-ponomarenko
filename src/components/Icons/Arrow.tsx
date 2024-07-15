import * as React from 'react'
import type { SVGProps } from 'react'

export const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill="none" {...props}>
    <path
      fill={props.fill}
      d="M10.814 4.025 9.57 5.269l4.925 4.935H3.752v1.765h10.743L9.57 16.904l1.244 1.244 7.062-7.061-7.062-7.062Z"
    />
  </svg>
)
