import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { getInformation } from '@/utils/sanity'

import { Title } from '@/components/UI/Title'
import { ImageWithLoader } from '@/components/ImageWithLoader'

import { getTailwindConfig } from '@/lib/getTailwindConfig'
import { adjustColor } from '@/utils/adjustColor'

export const HeroSection = async () => {
  const information = await getInformation()
  const fullConfig = getTailwindConfig()

  return (
    <div className="flex flex-col gap-4 items-center mt-[calc(60px+1rem)] px-2">
      <ImageWithLoader
        src={information.image.url}
        alt={information.image.alt}
        padding="px-[23%]"
        imageWidth={information.image.width}
        imageHeight={information.image.height}
        isLCP={true}
        loader={
          <SkeletonTheme
            baseColor={fullConfig.theme.backgroundColor.bezh as string}
            highlightColor={adjustColor(fullConfig.theme.backgroundColor.bezh as string, 5, 'darker')}
          >
            <Skeleton
              containerClassName="w-full inline-block leading-none"
              className="inline-block w-full leading-none"
              style={{
                aspectRatio: information.image.width / information.image.height,
              }}
            />
          </SkeletonTheme>
        }
      />
      <Title level={3} className="font-serif-italic italic-cyrillic">
        {information.name}
      </Title>
      <div className="whitespace-pre-line">{information.description}</div>
    </div>
  )
}
