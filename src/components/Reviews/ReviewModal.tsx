'use client'
import Image from 'next/image'
import { useEffect } from 'react'

import { Review } from '@/types/Review'

import { CloseButton } from '@/components/UI/CloseButton'

type ReviewModalProps = {
  review: Review
  isOpen: boolean
  onClose: () => void
}

export const ReviewModal = ({ review, isOpen, onClose }: ReviewModalProps) => {
  const {
    review: { text, slogan },
    person: { avatar, avatar_alt, name, position },
  } = review

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div
      className={`fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-25 w-full h-full overflow-hidden z-50 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 visibility-hidden'}`}
    >
      <div className="bg-bezh rounded-[6px] flex flex-col items-start justify-between max-w-[320px] min-w-[320px] min-h-[435px] overflow-hidden">
        <div className="w-full h-full flex flex-col justify-between gap-6 px-4 py-4">
          <div className="flex flex-col items-start gap-4">
            <div className="w-full flex items-center justify-between">
              <span className="px-2 py-1 font-semibold text-sm text-bezh bg-blue rounded-sm">Текстовий відгук</span>
              <CloseButton handleClose={onClose} bgColor="bg-blue" />
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src={avatar}
                alt={avatar_alt}
                className="w-[56px] h-[56px] object-cover rounded-full"
                width={56}
                height={56}
              />
              <div className="flex flex-col flex-start">
                <span className="text-dark-blue font-semibold text-md">{name}</span>
                <span className="text-dark-blue font-light text-md">{position}</span>
              </div>
            </div>
            {slogan && (
              <blockquote className="font-serif-italic text-bright-blue text-2xl">{`"...${slogan}..."`}</blockquote>
            )}
          </div>
          <div className="flex flex-col flex-start h-full justify-between">
            {text && <p className="whitespace-pre-wrap text-sm font-light text-dark-blue">{text}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
