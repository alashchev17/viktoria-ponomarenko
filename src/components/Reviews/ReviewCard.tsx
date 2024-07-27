'use client'

import Image from 'next/image'
import ReactPlayer from 'react-player/lazy'

import type { Review } from '@/types/Review'

import { InnerLink } from '@/components/UI/InnerLink'
import { PlayButton } from '@/components/UI/PlayButton'
import { useRef } from 'react'

import audioReviewPreview from '@/assets/audio-review-preview.png'

type ReviewCardProps = {
  review: Review
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const {
    review: { asset, duration, slogan, text, type },
    person: { avatar, avatar_alt, name, position },
  } = review

  const reviewTypeLabel = type === 'text' ? 'Текстовий відгук' : type === 'audio' ? 'Аудіо-відгук' : 'Відео-відгук'
  const isPlayerShown: boolean = type === 'video' || type === 'audio'

  const playerRef = useRef<ReactPlayer | null>(null)

  return (
    <div
      className={`bg-bezh rounded-[6px] flex ${type === 'audio' || type === 'text' ? 'flex-col' : 'flex-col-reverse'} items-start justify-between max-w-[320px] min-w-[320px] h-[435px] overflow-hidden`}
    >
      <div className="w-full h-full flex flex-col justify-between gap-6 px-4 py-4">
        <div className="flex flex-col items-start gap-4">
          {/* БЛОК НОМЕР 1 */}
          <div className="flex items-center gap-4">
            <span className="px-2 py-1 font-semibold text-sm text-bezh bg-blue rounded-sm">{reviewTypeLabel}</span>
            {type !== 'text' && <span className="font-semibold text-sm text-dark-blue">{duration} хв</span>}
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
        {/* БЛОК НОМЕР 2 */}
        {type === 'text' && (
          <div className="flex flex-col flex-start h-full justify-between">
            {text && <p className="whitespace-pre-wrap line-clamp-[8] text-sm font-light text-dark-blue">{text}</p>}
            <InnerLink href={`/reviews/${review._id}`} text="Прочитати повністю" />
          </div>
        )}
      </div>
      {isPlayerShown && (
        <ReactPlayer
          ref={playerRef}
          className="[&>video]:object-cover max-h-[51%]"
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
