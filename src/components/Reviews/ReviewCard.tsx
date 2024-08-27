'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player/lazy'

import type { Review } from '@/types/Review'

import { InnerLink } from '@/components/UI/InnerLink'
import { PlayButton } from '@/components/UI/PlayButton'
import { CloseButton } from '@/components/UI/CloseButton'

import audioReviewPreview from '@/assets/audio-review-preview.png'

type ReviewCardProps = {
  review: Review
  onInnerLinkClick: (review: Review) => void
}

type ReviewCardTextProps = {
  review: Review
  onClose: () => void
}

export const ReviewCard = ({ review, onInnerLinkClick }: ReviewCardProps) => {
  const {
    review: { asset, duration, slogan, text, type },
    person: { avatar, avatar_alt, name, position },
  } = review

  const reviewTypeLabel = type === 'text' ? 'Текстовий відгук' : type === 'audio' ? 'Аудіо-відгук' : 'Відео-відгук'
  const isPlayerShown: boolean = type !== 'text'
  const reviewCardContainerClassNames = type === 'audio' || type === 'text' ? 'flex-col' : 'flex-col-reverse'

  const playerRef = useRef<ReactPlayer | null>(null)

  return (
    <div
      className={`bg-bezh rounded-[6px] flex ${reviewCardContainerClassNames} items-start justify-between max-w-[320px] min-w-[320px] h-[435px] overflow-hidden`}
    >
      <div className="w-full h-full flex flex-col justify-between gap-6 px-4 py-4">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <span className="px-2 py-1 font-semibold text-sm text-bezh bg-blue rounded-sm">{reviewTypeLabel}</span>
            {isPlayerShown && <span className="font-semibold text-sm text-dark-blue">{duration} хв</span>}
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
        {type === 'text' && (
          <div className="flex flex-col flex-start h-full justify-between">
            {text && <p className="whitespace-pre-wrap line-clamp-[8] text-sm font-light text-dark-blue">{text}</p>}
            <InnerLink text="Прочитати повністю" onClick={() => onInnerLinkClick(review)} />
          </div>
        )}
      </div>
      {isPlayerShown && (
        <ReactPlayer
          ref={playerRef}
          className="[&>video]:object-cover max-h-[48%]"
          url={asset}
          light={type === 'audio' ? audioReviewPreview.src : avatar}
          playing
          playsinline
          onEnded={() => {
            playerRef?.current?.showPreview()
          }}
          playIcon={<PlayButton />}
          width="100%"
          controls
          pip={false}
          height="100%"
        />
      )}
    </div>
  )
}

export const ReviewCardText = ({ review, onClose }: ReviewCardTextProps) => {
  const {
    person: { avatar, avatar_alt, name, position },
    review: { slogan, text },
  } = review

  const textContainer = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if (text && textContainer.current) {
      const textHeight = textContainer.current?.scrollHeight
      if (textHeight) {
        textContainer.current.style.maxHeight = `${textHeight < 180 ? textHeight : 180}px`
      }
    }
  }, [text])

  return (
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
          {text && (
            <p ref={textContainer} className="whitespace-pre-wrap text-sm font-light text-dark-blue overflow-auto">
              {text}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
