import { Header } from '@/components/Header'

import { ServiceSection } from '@/components/Sections/ServiceSection'
import { InformationSection } from '@/components/Sections/InformationSection'
import { ReviewsSection } from '@/components/Sections/ReviewsSection'

export const revalidate = 30

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <InformationSection />
      <ServiceSection />
      <ReviewsSection />
    </div>
  )
}
