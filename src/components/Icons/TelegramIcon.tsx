import React from 'react'
import { SVGProps } from 'react'

export const TelegramIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={'0 0 13.33 11.01'} {...props}>
      <path
        className="inline-block"
        fill={props.fill}
        width={props.width}
        height={props.height}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.235.57C10.477 1.298 2.94 4.42.857 5.27-.539 5.817.278 6.328.278 6.328s1.192.409 2.214.715c1.022.307 1.567-.034 1.567-.034l4.803-3.236c1.703-1.158 1.294-.204.886.204A130.25 130.25 0 0 1 6.17 7.383c-.545.477-.272.885-.034 1.09.886.75 3.304 2.282 3.44 2.384.72.51 2.136 1.243 2.351-.306l.852-5.348c.272-1.806.545-3.475.579-3.952.102-1.158-1.124-.68-1.124-.68Z"
      />
    </svg>
  )
}
