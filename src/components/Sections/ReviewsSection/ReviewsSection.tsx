import Image from 'next/image'

import { getReviews } from '@/utils/sanity'

export const ReviewsSection = async () => {
  const reviews = await getReviews()

  return (
    <div>
      <b>Reviews:</b>
      {reviews.length > 0 &&
        reviews.map((review) => (
          <div key={review._id}>
            <div>Person Name: {review.personName}</div>
            <div>Person Position: {review.personPosition}</div>
            <div>Duration: {review.duration}</div>
            <div>
              Person Photo:{' '}
              <Image
                src={review.personAvatar}
                alt={review.personAvatarAlt}
                width={50}
                height={50}
                className="rounded-full w-[50px] h-[50px] object-cover"
              />
            </div>
            <div className="italic font-bold">{`"...${review.reviewSlogan}..."`}</div>
            <div>
              Review Text: <div className="whitespace-pre-line">{review.reviewText}</div>
            </div>
          </div>
        ))}
    </div>
  )
}
