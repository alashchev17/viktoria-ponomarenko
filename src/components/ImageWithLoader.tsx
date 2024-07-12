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
}

export const ImageWithLoader = ({ src, alt, imageWidth, imageHeight, padding = '', loader }: ImageWithLoaderProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div className={`relative w-full ${padding}`}>
      <Image
        src={src}
        alt={alt}
        className={`w-full ${isImageLoaded ? '' : 'opacity-0 absolute w-0 h-0'}`}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        onLoad={() => setIsImageLoaded(true)}
      />
      {!isImageLoaded && <>{loader}</>}
    </div>
  )
}
