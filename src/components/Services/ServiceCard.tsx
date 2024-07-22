import { Service } from '@/types/Service'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { ServiceCardHeader, ServiceCardBody, ServiceCardFooter } from '@/components/Services'
import { ImageWithLoader } from '@/components/ImageWithLoader'

import { getTailwindConfig } from '@/lib/getTailwindConfig'
import { adjustColor } from '@/utils/adjustColor'

type ServiceCardProps = {
  service: Service
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const fullConfig = getTailwindConfig()
  return (
    <div className="border-2 border-bezh rounded-xl overflow-hidden">
      <ServiceCardHeader title={service.name} />
      <ImageWithLoader
        src={service.banner.url}
        alt={service.banner.alt}
        imageWidth={service.banner.width}
        imageHeight={260}
        className="min-w-[100%] object-cover max-h-[260px]"
        loader={
          <SkeletonTheme
            baseColor={fullConfig.theme.backgroundColor.bezh as string}
            highlightColor={adjustColor(fullConfig.theme.backgroundColor.bezh as string, 5, 'darker')}
          >
            <Skeleton
              containerClassName="w-full block leading-none"
              className="inline-block w-full leading-none"
              style={{
                height: 260,
                aspectRatio: service.banner.width / 260,
              }}
            />
          </SkeletonTheme>
        }
      />
      <ServiceCardBody description={service.description} questions={service.questions} />
      <ServiceCardFooter duration={service.duration} price={service.price} link={service.link} />
    </div>
  )
}
