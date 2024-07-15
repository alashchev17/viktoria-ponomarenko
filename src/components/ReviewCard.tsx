import Image from 'next/image'

import type { Review } from '@/types/Review'

type ReviewCardProps = {
  review: Review
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const { reviewSlogan, reviewText, personName, personAvatar, personAvatarAlt, reviewType } = review

  if (reviewType === 'text') {
    return (
      <div className="px-4 py-4 bg-bezh rounded-xl flex flex-col items-start gap-6 max-w-[320px] min-w-[320px]">
        <div className="flex flex-col items-start gap-4">
          <span className="px-2 py-1 font-semibold text-bezh bg-blue rounded-sm">Текстовий відгук</span>
          <div className="flex gap-4 items-center">
            <Image
              src={personAvatar}
              alt={personAvatarAlt}
              className="w-[56px] h-[56px] object-cover rounded-full"
              width={56}
              height={56}
            />
            <span className="text-dark-blue font-semibold text-md">{personName}</span>
          </div>
        </div>
        <blockquote className="font-serif-italic text-bright-blue text-2xl">{`"...${reviewSlogan}..."`}</blockquote>
        <p className="whitespace-pre">{reviewText}</p>
        <a href="#" className="">
          Прочитати повністю
        </a>
      </div>
    )
  }

  if (reviewType === 'audio') {
    return (
      <div className="px-4 py-4 bg-bezh rounded-xl flex flex-col items-start gap-6 max-w-[320px] min-w-[320px]">
        <div className="flex flex-col items-start gap-4">
          <span className="px-2 py-1 font-semibold text-bezh bg-blue rounded-sm">Аудіо-відгук</span>
          <div className="flex gap-4 items-center">
            <Image
              src={personAvatar}
              alt={personAvatarAlt}
              className="w-[56px] h-[56px] object-cover rounded-full"
              width={56}
              height={56}
            />
            <span className="text-dark-blue font-semibold text-md">{personName}</span>
          </div>
        </div>
        <blockquote className="font-serif-italic text-bright-blue text-2xl">{`"...${reviewSlogan}..."`}</blockquote>
        <p className="whitespace-pre">{reviewText}</p>
        <a href="#" className="">
          Прочитати повністю
        </a>
      </div>
    )
  }

  if (reviewType === 'video') {
    return (
      <div className="px-4 py-4 bg-bezh rounded-xl flex flex-col items-start gap-6 max-w-[320px] min-w-[320px]">
        <div className="flex flex-col items-start gap-4">
          <span className="px-2 py-1 font-semibold text-bezh bg-blue rounded-sm">Відео-відгук</span>
          <div className="flex gap-4 items-center">
            <Image
              src={personAvatar}
              alt={personAvatarAlt}
              className="w-[56px] h-[56px] object-cover rounded-full"
              width={56}
              height={56}
            />
            <span className="text-dark-blue font-semibold text-md">{personName}</span>
          </div>
        </div>
        <blockquote className="font-serif-italic text-bright-blue text-2xl">{`"...${reviewSlogan}..."`}</blockquote>
        <p className="whitespace-pre">{reviewText}</p>
        <a href="#" className="">
          Прочитати повністю
        </a>
      </div>
    )
  }
}
