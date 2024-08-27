'use client'

import { useEffect } from 'react'

import { Review } from '@/types/Review'
import { ReviewCardText } from './ReviewCard'

type ReviewModalProps = {
  review: Review
  isOpen: boolean
  onClose: () => void
}

export const ReviewModal = ({ review, isOpen, onClose }: ReviewModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const modalContainerClassNames = isOpen ? 'opacity-100 visible' : 'opacity-0 visibility-hidden'

  return (
    <div
      className={`fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-25 w-full h-full overflow-hidden z-50 transition-all duration-300 ${modalContainerClassNames}`}
    >
      <ReviewCardText review={review} onClose={onClose} />
    </div>
  )
}
