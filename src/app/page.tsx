import { Header } from '@/components/UI/Header'

import { ServiceSection } from '@/components/Services/ServiceSection'
import { HeroSection } from '@/components/Hero/HeroSection'
import { ReviewsSection } from '@/components/Reviews/ReviewsSection'

export const revalidate = 30

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <div className="pt-[calc(60px+1rem)]">
        <Header />
        <HeroSection />
        <ServiceSection />
        <ReviewsSection />
      </div>
    </div>
  )
}
