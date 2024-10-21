'use client'
import { Service } from '@/types/Service'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { ServiceCardHeader, ServiceCardBody, ServiceCardFooter } from '@/components/Services'
import { ImageWithLoader } from '@/components/ImageWithLoader'

import { getTailwindConfig } from '@/lib/getTailwindConfig'
import { adjustColor } from '@/utils/adjustColor'
import { useWindow } from '@/hooks/useWindow'

type ServiceCardProps = {
  service: Service
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const fullConfig = getTailwindConfig()
  const { isMobile } = useWindow()
  return (
    <div className="border-2 border-bezh rounded-xl overflow-hidden lg:flex">
      {isMobile && <ServiceCardHeader title={service.name} />}
      <ImageWithLoader
        src={service.banner.url}
        alt={service.banner.alt}
        imageWidth={service.banner.width}
        imageHeight={260}
        className="min-w-[100%] object-cover max-h-[260px] lg:h-full lg:max-h-[590px]"
        wrapperClassName="lg:flex-grow"
        isDesktop={!isMobile}
        loader={
          <SkeletonTheme
            baseColor={fullConfig.theme.backgroundColor.bezh as string}
            highlightColor={adjustColor(fullConfig.theme.backgroundColor.bezh as string, 5, 'darker')}
          >
            <Skeleton
              containerClassName="w-full block leading-none lg:max-h-[590px]"
              className="inline-block w-full leading-none"
              style={{
                height: '100%',
                aspectRatio: isMobile ? service.banner.width / 260 : '1 / 1',
              }}
            />
          </SkeletonTheme>
        }
      />
      <div className="lg:flex lg:flex-col lg:justify-between lg:max-w-[50%] lg:max-h-[590px]">
        {!isMobile && <ServiceCardHeader title={service.name} />}
        <p className="py-4 px-4 font-light text-sm">{service.description}</p>
        <ServiceCardBody isDesktop={!isMobile} questions={service.questions} />
        <ServiceCardFooter duration={service.duration} price={service.price} link={service.link} />
      </div>
    </div>
  )
}
