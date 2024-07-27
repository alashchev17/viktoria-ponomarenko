import { SVGProps } from 'react'

export const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width || 36}
      height={props.height || 26}
      viewBox="0 0 36 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.413 4.8418C34.2138 4.10277 33.8245 3.4288 33.2839 2.88697C32.7433 2.34514 32.0702 1.95434 31.3317 1.75348C28.5931 1.00151 17.6371 0.989271 17.6371 0.989271C17.6371 0.989271 6.68286 0.977029 3.94255 1.69577C3.20444 1.90588 2.53274 2.3022 1.99192 2.84669C1.45111 3.39118 1.05934 4.06556 0.854237 4.80507C0.131998 7.54363 0.125003 13.2236 0.125003 13.2236C0.125003 13.2236 0.118008 18.9316 0.835 21.6422C1.23722 23.1408 2.41763 24.3248 3.91807 24.7287C6.68461 25.4807 17.6109 25.4929 17.6109 25.4929C17.6109 25.4929 28.5669 25.5052 31.3054 24.7882C32.0443 24.5877 32.718 24.1978 33.26 23.6571C33.8019 23.1163 34.1933 22.4435 34.3955 21.7051C35.1195 18.9683 35.1247 13.2901 35.1247 13.2901C35.1247 13.2901 35.1597 7.58036 34.413 4.8418ZM14.1326 18.4856L14.1413 7.99307L23.2471 13.2481L14.1326 18.4856Z"
        fill={props.fill}
      />
    </svg>
  )
}