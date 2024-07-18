'use client'

import React, { useState } from 'react'
import Image from 'next/image'

type ImageWithLoaderProps = {
  src: string
  alt: string
  imageWidth: number
  imageHeight: number
  padding?: string
  loader: React.ReactNode
  wrapperClassName?: string
  className?: string
}

export const ImageWithLoader = ({
  src,
  alt,
  imageWidth,
  imageHeight,
  padding = '',
  wrapperClassName = 'relative w-full',
  className = '',
  loader,
}: ImageWithLoaderProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div className={`${wrapperClassName} ${padding}`}>
      <Image
        src={src}
        alt={alt}
        className={`w-full ${isImageLoaded ? '' : 'opacity-0 absolute w-0 h-0'} ${className}`}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        onLoad={() => setIsImageLoaded(true)}
      />
      {!isImageLoaded && <>{loader}</>}
    </div>
  )
}
