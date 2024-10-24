import { getReviews } from '@/utils/sanity'
import { ReviewsSlider } from '@/components/Reviews/ReviewsSlider'

export const ReviewsSection = async () => {
  const reviews = await getReviews()

  return (
    <div className="overflow-hidden py-12 lg:py-24">
      <ReviewsSlider reviews={reviews} />
    </div>
  )
}
