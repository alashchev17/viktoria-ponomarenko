import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ImageWithLoader } from '@/components/ImageWithLoader'

import { getInformation } from '@/utils/sanity'

import { getTailwindConfig } from '@/lib/getTailwindConfig'
import { adjustColor } from '@/utils/adjustColor'

export const ChannelSection = async () => {
  const information = await getInformation()
  const fullConfig = getTailwindConfig()

  return (
    <div className="flex flex-col px-2 py-8">
      <div className="relative overflow-hidden border-2 border-bezh rounded-xl">
        <div className="absolute top-0 left-0 z-10">123</div>
        <ImageWithLoader
          src={information.image.url}
          alt={information.image.alt}
          imageWidth={information.image.width}
          imageHeight={information.image.height}
          isLCP={true}
          loader={
            <SkeletonTheme
              baseColor={fullConfig.theme.backgroundColor.bezh as string}
              highlightColor={adjustColor(fullConfig.theme.backgroundColor.bezh as string, 5, 'darker')}
            >
              <Skeleton
                containerClassName="w-full block leading-none"
                className="inline-block w-full leading-none"
                style={{
                  aspectRatio: information.image.width / information.image.height,
                }}
              />
            </SkeletonTheme>
          }
        />
      </div>
    </div>
  )
}
