'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useRef, useState } from 'react'
import Slider from 'react-slick'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import type { Settings as SliderSettings } from 'react-slick'

import type { Review } from '@/types/Review'

import { ReviewCard } from '@/components/Reviews/ReviewCard'
import { Button } from '@/components/UI/Button'
import { Title } from '@/components/UI/Title'
import { Arrow } from '@/components/Icons/Arrow'

import { adjustColor } from '@/utils/adjustColor'
import { getTailwindConfig } from '@/lib/getTailwindConfig'

type ReviewsSliderProps = {
  reviews: Review[]
}

export const ReviewsSlider = ({ reviews }: ReviewsSliderProps) => {
  const slider = useRef<Slider | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const fullConfig = getTailwindConfig()

  const sliderSettings: SliderSettings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    swipe: false,
    centerMode: true,
    variableWidth: true,
    lazyLoad: 'ondemand',
    onInit: () => {
      const timeoutId = setTimeout(() => {
        setIsInitialized(true)
      }, 500)

      return () => clearTimeout(timeoutId)
    },
  }

  const screenWidth = window.innerWidth
  const reviewsCardWidth = 320
  const reviewsCardPadding = 8
  const widthToSecondElementStart = reviewsCardWidth + reviewsCardPadding
  const widthToSecondElementCenter = widthToSecondElementStart + reviewsCardWidth / 2
  const totalTranslation = screenWidth / 2 - widthToSecondElementCenter - reviewsCardPadding // deducing padding because we have container

  return (
    <div>
      <div className="flex justify-between items-center mb-6 px-2">
        <Button variant="icon" action={() => slider?.current?.slickPrev()}>
          <Arrow fill="#F6EDDE" width={22} height={22} className="rotate-180" />
        </Button>
        <Title level={6} className="font-sans font-bold text-bezh uppercase">
          Відгуки
        </Title>
        <Button variant="icon" action={() => slider?.current?.slickNext()}>
          <Arrow fill="#F6EDDE" width={22} height={22} />
        </Button>
      </div>
      {!isInitialized && (
        <div className="flex gap-2 mx-2" style={{ translate: `${totalTranslation}px 0` }}>
          <SkeletonTheme
            baseColor={fullConfig.theme.backgroundColor.bezh as string}
            highlightColor={adjustColor(fullConfig.theme.backgroundColor.bezh as string, 5, 'darker')}
          >
            {reviews.map(review => (
              <Skeleton
                key={review._id}
                width={320}
                height={435}
                className="leading-none"
                containerClassName="leading-none"
                borderRadius={'6px'}
              />
            ))}
          </SkeletonTheme>
        </div>
      )}
      <Slider {...sliderSettings} ref={slider} className={isInitialized ? '' : 'opacity-0 h-0'}>
        {reviews.map(review => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </Slider>
    </div>
  )
}
