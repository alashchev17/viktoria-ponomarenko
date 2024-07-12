import Image from 'next/image'

import type { Review } from '@/types/Review'

type ReviewCardProps = {
  review: Review
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const { reviewSlogan, reviewText, personName, personAvatar, personAvatarAlt, reviewType } = review

  if (reviewType === 'text') {
    return (
      <div className="testimonial">
        <div className="testimonial-header">
          <Image src={personAvatar} alt={personAvatarAlt} className="testimonial-avatar" width={50} height={50} />
          <div className="testimonial-info">
            <span className="testimonial-name">{personName}</span>
            <span className="testimonial-type">Текстовий відгук</span>
          </div>
        </div>
        <blockquote className="testimonial-quote">{`"...${reviewSlogan}..."`}</blockquote>
        <p className="testimonial-text">{reviewText}</p>
        <a href="#" className="read-more">
          Прочитати повністю
        </a>
      </div>
    )
  }

  if (reviewType === 'audio') {
    return (
      <div className="testimonial">
        <div className="testimonial-header">
          <Image src={personAvatar} alt={personAvatarAlt} className="testimonial-avatar" width={50} height={50} />
          <div className="testimonial-info">
            <span className="testimonial-name">{personName}</span>
            <span className="testimonial-type">Аудіо-відгук</span>
          </div>
        </div>
        <blockquote className="testimonial-quote">{`"...${reviewSlogan}..."`}</blockquote>
        <p className="testimonial-text">{reviewText}</p>
        <a href="#" className="read-more">
          Прочитати повністю
        </a>
      </div>
    )
  }

  if (reviewType === 'video') {
    return (
      <div className="testimonial">
        <div className="testimonial-header">
          <Image src={personAvatar} alt={personAvatarAlt} className="testimonial-avatar" width={50} height={50} />
          <div className="testimonial-info">
            <span className="testimonial-name">{personName}</span>
            <span className="testimonial-type">Відео-відгук</span>
          </div>
        </div>
        <blockquote className="testimonial-quote">{`"...${reviewSlogan}..."`}</blockquote>
        <p className="testimonial-text">{reviewText}</p>
        <a href="#" className="read-more">
          Прочитати повністю
        </a>
      </div>
    )
  }
}
