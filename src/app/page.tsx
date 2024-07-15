import { Header } from '@/components/UI/Header'

import { ServiceSection } from '@/components/Sections/ServiceSection'
import { InformationSection } from '@/components/Sections/InformationSection'
import { ReviewsSection } from '@/components/Sections/ReviewsSection'

export const revalidate = 30

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <div className="pt-[calc(60px+1rem)]">
        <Header />
        {/* <InformationSection />
        <ServiceSection /> */}
        <ReviewsSection />
      </div>
    </div>
  )
}
