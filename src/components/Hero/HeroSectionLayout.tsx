'use client'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { ImageWithLoader } from '@/components/ImageWithLoader'
import { Title } from '@/components/UI/Title'

import { adjustColor } from '@/utils/adjustColor'

import { useWindow } from '@/hooks/useWindow'
import { getTailwindConfig } from '@/lib/getTailwindConfig'
import { InformationImage } from '@/types/Information'
import { useEffect, useState } from 'react'

type HeroSectionLayoutProps = {
  name: string
  description: string
  images: InformationImage[]
  keywords: string[]
}

export const HeroSectionLayout = ({ name, description, images, keywords }: HeroSectionLayoutProps) => {
  const fullConfig = getTailwindConfig()
  const { isMobile } = useWindow()
  const [image, setImage] = useState<InformationImage>(
    images.find(img => (isMobile ? img.device === 'mobile' : img.device === 'desktop'))!,
  )

  useEffect(() => {
    if (isMobile) {
      setImage(images.filter(img => img.device === 'mobile')[0])
    } else {
      setImage(images.filter(img => img.device === 'desktop')[0])
    }
  }, [isMobile, images])

  return (
    <div className="flex flex-col gap-2 px-2 pt-2 lg:px-6">
      <div className="relative overflow-hidden border-2 border-bezh rounded-xl">
        <div className="absolute flex flex-col justify-between w-full h-full top-0 left-0 z-10 py-6 px-6 lg:px-14 lg:py-14 lg:gap-6 lg:max-w-[610px]">
          <div className="flex flex-col gap-3 lg:justify-between lg:h-full lg:flex-col-reverse lg:items-start">
            <Title
              level={1}
              className="font-serif-italic uppercase font-bold text-bezh text-center lg:text-left external-glow-purple"
            >
              {name}
            </Title>
            <div className="w-full flex justify-between px-2">
              {keywords.map(keyword => (
                <span
                  key={keyword}
                  className="font-serif-italic font-extralight leading-normal text-[#CDE1FF] text-[15px] tracking-widest external-glow-blue"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <p className="whitespace-pre-wrap text-center text-bezh font-sans font-extralight text-lg leading-tight lg:text-left">
            {description}
          </p>
        </div>
        <ImageWithLoader
          src={image.url}
          alt={image.alt}
          imageWidth={image.width}
          imageHeight={image.height}
          isLCP={true}
          isJSX={true}
          isDesktop={!isMobile}
          loader={
            <SkeletonTheme
              baseColor={fullConfig.theme.backgroundColor.bezh as string}
              highlightColor={adjustColor(fullConfig.theme.backgroundColor.bezh as string, 5, 'darker')}
            >
              <Skeleton
                containerClassName="w-full h-full block leading-none"
                className="inline-block w-full leading-none"
                style={{
                  height: '100%',
                }}
              />
            </SkeletonTheme>
          }
        />
      </div>
    </div>
  )
}
