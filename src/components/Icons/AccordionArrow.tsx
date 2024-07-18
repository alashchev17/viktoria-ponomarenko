import * as React from 'react'
import type { SVGProps } from 'react'

export const AccordionArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.0349 6.95711C6.81523 7.17678 6.45913 7.17678 6.23945 6.95711L0.504594 1.22223C0.284927 1.00256 0.284927 0.646457 0.504594 0.426782L0.769764 0.161582C0.989432 -0.0580926 1.34558 -0.0580926 1.56526 0.161582L6.63718 5.23353L11.7091 0.161582C11.9288 -0.0580926 12.2849 -0.0580926 12.5046 0.161582L12.7698 0.426782C12.9895 0.646457 12.9895 1.00256 12.7698 1.22223L7.0349 6.95711Z"
        fill={props.fill || '#F6EDDE'}
      />
    </svg>
  )
}
