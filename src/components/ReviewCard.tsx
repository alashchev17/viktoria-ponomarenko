import Image from 'next/image'
import type { Review } from '@/types/Review'
import { InnerLink } from './UI/InnerLink'

type ReviewCardProps = {
  review: Review
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const { reviewSlogan, reviewText, personName, personPosition, personAvatar, personAvatarAlt, reviewType } = review

  const reviewTypeLabel =
    reviewType === 'text' ? 'Текстовий відгук' : reviewType === 'audio' ? 'Аудіо-відгук' : 'Відео-відгук'

  return (
    <div
      className={`px-4 py-4 bg-bezh rounded-xl flex ${reviewType === 'audio' || reviewType === 'text' ? 'flex-col' : 'flex-col-reverse'} items-start gap-6 max-w-[320px] min-w-[320px]`}
    >
      <div className="flex flex-col items-start gap-4">
        {/* БЛОК НОМЕР 1 */}
        <span className="px-2 py-1 font-semibold text-bezh bg-blue rounded-sm">{reviewTypeLabel}</span>
        <div className="flex gap-4 items-center">
          <Image
            src={personAvatar}
            alt={personAvatarAlt}
            className="w-[56px] h-[56px] object-cover rounded-full"
            width={56}
            height={56}
          />
          <div className="flex flex-col flex-start">
            <span className="text-dark-blue font-semibold text-md">{personName}</span>
            <span className="text-dark-blue font-light text-md">{personPosition}</span>
          </div>
        </div>
        {reviewSlogan && (
          <blockquote className="font-serif-italic text-bright-blue text-2xl">{`"...${reviewSlogan}..."`}</blockquote>
        )}
      </div>
      {/* БЛОК НОМЕР 2 */}
      {reviewType === 'text' ? (
        <div className="flex flex-col flex-start gap-6">
          <p className="whitespace-pre">{reviewText}</p>
          <InnerLink href={`/reviews/${review._id}`} text="Прочитати повністю" />
        </div>
      ) : (
        <div className="player">Video/audio player</div>
      )}
    </div>
  )
}
