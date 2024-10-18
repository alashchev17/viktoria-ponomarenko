import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ImageWithLoader } from '@/components/ImageWithLoader'
import { Title } from '@/components/UI/Title'

import { getInformation } from '@/utils/sanity'

import { getTailwindConfig } from '@/lib/getTailwindConfig'
import { adjustColor } from '@/utils/adjustColor'
import { getLastWordInString } from '@/utils/getLastWordInString'

export const ChannelSection = async () => {
  const { channel, links } = await getInformation()
  const fullConfig = getTailwindConfig()
  const [channelDescription, lastChannelDescriptionWord] = getLastWordInString(channel.description)
  return (
    <>
      {links.telegram_url && (
        <div className="flex flex-col gap-2 px-2 pt-8 lg:px-6">
          <div className="relative overflow-hidden border-2 border-bezh rounded-xl">
            <div className="absolute w-full top-0 left-0 z-10 pt-2">
              <Title level={1} className="uppercase font-bold text-center">
                {channel.name}
              </Title>
              <p className="whitespace-pre-wrap text-center text-sm mt-3">{channelDescription}</p>
              <div className="text-center text-base font-serif-italic font-light leading-[125%]">
                {lastChannelDescriptionWord}
              </div>
            </div>
            <ImageWithLoader
              src={channel.image.url}
              alt={channel.image.alt}
              imageWidth={channel.image.width}
              imageHeight={channel.image.height}
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
                      aspectRatio: channel.image.width / channel.image.height,
                    }}
                  />
                </SkeletonTheme>
              }
            />
          </div>
          <a
            className="w-full py-6 font-serif-italic font-semibold tracking-[.13em] text-base text-center text-bezh bg-[#5C82C8] border-2 border-bezh rounded-xl"
            href={links.telegram_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Підписатися на канал
          </a>
        </div>
      )}
    </>
  )
}
