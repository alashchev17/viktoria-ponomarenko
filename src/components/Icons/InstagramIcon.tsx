import React from 'react';
import { SVGProps } from 'react';

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fill={props.fill}
        width={props.width}
        height={props.height}
        fillRule="evenodd"
        d="M10.684.78h-6.44A4.024 4.024 0 0 0 .22 4.804v6.44a4.024 4.024 0 0 0 4.025 4.024h6.439a4.024 4.024 0 0 0 4.024-4.025V4.804A4.024 4.024 0 0 0 10.684.78ZM13.3 11.243a2.624 2.624 0 0 1-2.616 2.616h-6.44a2.624 2.624 0 0 1-2.615-2.616V4.804a2.624 2.624 0 0 1 2.616-2.616h6.439A2.624 2.624 0 0 1 13.3 4.804v6.44Zm-2.013-6.237a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Zm-3.823-.604a3.622 3.622 0 1 0 3.622 3.622 3.614 3.614 0 0 0-3.622-3.622ZM5.251 8.024a2.213 2.213 0 1 0 4.427 0 2.213 2.213 0 0 0-4.427 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
