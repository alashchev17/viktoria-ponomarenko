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
  isLCP?: boolean
  isJSX?: boolean // this flag is used to be able to render images as a background for div and not a Image component
  isDesktop?: boolean
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
  isLCP = false,
  isJSX = false,
  isDesktop = false,
}: ImageWithLoaderProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div className={`${wrapperClassName} ${padding} overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        className={`w-full ${isImageLoaded ? '' : 'opacity-0 absolute w-0 h-0'} ${className}`}
        width={imageWidth}
        height={imageHeight}
        loading={!isLCP ? 'lazy' : undefined}
        priority={isLCP}
        onLoad={() => setIsImageLoaded(true)}
        style={
          isJSX
            ? {
                height: isDesktop ? 'calc(100dvh - 60px - 4rem)' : 'calc(100dvh - 60px - 2.5rem)',
                objectFit: 'cover',
                objectPosition: isDesktop ? 'top' : 'top right',
              }
            : undefined
        }
      />
      {!isImageLoaded && (
        <div
          style={
            isJSX
              ? {
                  height: typeof window !== 'undefined' ? window.innerHeight - 60 - 40 : 0,
                }
              : undefined
          }
        >
          {loader}
        </div>
      )}
    </div>
  )
}
