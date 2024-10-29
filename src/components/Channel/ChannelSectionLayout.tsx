'use client'

import type { InformationLinks, InformationChannel } from '@/types/Information'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ImageWithLoader } from '@/components/ImageWithLoader'
import { Title } from '@/components/UI/Title'

import { getTailwindConfig } from '@/lib/getTailwindConfig'
import { adjustColor } from '@/utils/adjustColor'
import { getLastWordInString } from '@/utils/getLastWordInString'
import { useWindow } from '@/hooks/useWindow'

type ChannelSectionLayoutProps = {
  links: InformationLinks
  channel: InformationChannel
}

type ChannelSectionExtendedLayoutProps = {
  channelDescription: string
  lastChannelDescriptionWord: string
} & ChannelSectionLayoutProps

export const ChannelSectionLayout = ({ links, channel }: ChannelSectionLayoutProps) => {
  const { isMobile } = useWindow()
  const [channelDescription, lastChannelDescriptionWord] = getLastWordInString(channel.description)

  return (
    <>
      {isMobile ? (
        <ChannelSectionMobileLayout
          channel={channel}
          links={links}
          channelDescription={channelDescription}
          lastChannelDescriptionWord={lastChannelDescriptionWord}
        />
      ) : (
        <ChannelSectionDesktopLayout
          channel={channel}
          links={links}
          channelDescription={channelDescription}
          lastChannelDescriptionWord={lastChannelDescriptionWord}
        />
      )}
    </>
  )
}

const ChannelSectionMobileLayout = ({
  channel,
  links,
  channelDescription,
  lastChannelDescriptionWord,
}: ChannelSectionExtendedLayoutProps) => {
  const fullConfig = getTailwindConfig()

  return (
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
          isDesktop={true}
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
        href={links.telegram_url ? links.telegram_url : 'https://telegram.org'}
        target="_blank"
        rel="noopener noreferrer"
      >
        Підписатися на канал
      </a>
    </div>
  )
}
const ChannelSectionDesktopLayout = ({
  channel,
  links,
  channelDescription,
  lastChannelDescriptionWord,
}: ChannelSectionExtendedLayoutProps) => {
  const fullConfig = getTailwindConfig()

  return (
    <div className="flex flex-col gap-4 px-2 pt-8 lg:px-6">
      <div className="relative">
        <div className="py-[73px] flex flex-col gap-9 items-center justify-center">
          <Title level={1} className="uppercase font-bold text-center lg:text-8xl">
            {channel.name}
          </Title>
          <div>
            <p className="whitespace-pre-wrap text-center text-2xl">{channelDescription}</p>
            <div className="text-center text-3xl font-serif-italic font-light leading-[125%]">
              {lastChannelDescriptionWord}
            </div>
          </div>
          <a
            className="py-6 px-28 font-serif-italic font-extrabold tracking-[.13em] text-base leading-5 text-center text-dark-blue bg-bezh border-2 border-bezh rounded-xl"
            href={links.telegram_url ? links.telegram_url : 'https://telegram.org'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Підписатися на канал
          </a>
        </div>
        <ImageWithLoader
          src={channel.image.url}
          alt={channel.image.alt}
          imageWidth={channel.image.width}
          imageHeight={channel.image.height}
          wrapperClassName="absolute top-0 left-0 max-w-[361.5px] -z-10 rounded-xl"
          isDesktop={false}
          isLCP={false}
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
    </div>
  )
}
