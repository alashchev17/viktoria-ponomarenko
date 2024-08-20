import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { getInformation } from '@/utils/sanity'

import { ImageWithLoader } from '@/components/ImageWithLoader'
import { Title } from '@/components/UI/Title'

import { getTailwindConfig } from '@/lib/getTailwindConfig'
import { adjustColor } from '@/utils/adjustColor'

const keywords = ['Аура', 'Зцілення', 'Цілісність', 'Любов']

export const HeroSection = async () => {
  const { name, description, image } = await getInformation()
  const fullConfig = getTailwindConfig()

  return (
    <div className="flex flex-col gap-2 px-2 pt-2">
      <div className="relative overflow-hidden border-2 border-bezh rounded-xl">
        <div className="absolute flex flex-col justify-between w-full h-full top-0 left-0 z-10 py-6 px-6">
          <div className="flex flex-col gap-3">
            <Title
              level={1}
              className="font-serif-italic uppercase font-bold text-bezh text-center external-glow-purple"
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
          <p className="whitespace-pre-wrap text-center text-bezh font-sans font-extralight text-lg leading-tight">
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
          loader={
            <SkeletonTheme
              baseColor={fullConfig.theme.backgroundColor.bezh as string}
              highlightColor={adjustColor(fullConfig.theme.backgroundColor.bezh as string, 5, 'darker')}
            >
              <Skeleton
                containerClassName="w-full h-full block leading-none"
                className="inline-block w-full leading-none"
                style={{
                  aspectRatio: image.width / image.height,
                }}
              />
            </SkeletonTheme>
          }
        />
      </div>
    </div>
  )
}
