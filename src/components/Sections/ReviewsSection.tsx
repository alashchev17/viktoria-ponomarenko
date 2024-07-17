import { getReviews } from '@/utils/sanity'
import { ReviewsSlider } from '@/components/ReviewsSlider'

export const ReviewsSection = async () => {
  const reviews = await getReviews()

  return (
    <div className="overflow-hidden py-6">
      <ReviewsSlider reviews={reviews} />
    </div>
  )
}
