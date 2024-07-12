'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useRef } from 'react'
import Slider from 'react-slick'

import { ReviewCard } from '@/components/ReviewCard'
import { Button } from '@/components/UI/Button'
import { Title } from '@/components/UI/Title'

import type { Settings as SliderSettings } from 'react-slick'
import type { Review } from '@/types/Review'

type ReviewsSliderProps = {
  reviews: Review[]
}

export const ReviewsSlider = ({ reviews }: ReviewsSliderProps) => {
  const slider = useRef<Slider | null>(null)

  const sliderSettings: SliderSettings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
  }

  return (
    <div>
      <div className="flex justify-between">
        <Title
          level={4}
          className="font-sans font-bold text-dark-blue uppercase"
        >
          Відгуки
        </Title>
        <div className="flex gap-2 items-center">
          <Button variant="icon" action={() => slider?.current?.slickPrev()}>
            Prev
          </Button>
          <Button variant="icon" action={() => slider?.current?.slickNext()}>
            Next
          </Button>
        </div>
      </div>

      <Slider {...sliderSettings} ref={slider}>
        {reviews.map(review => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </Slider>
    </div>
  )
}
