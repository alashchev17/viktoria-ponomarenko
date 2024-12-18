import { Header } from '@/components/UI/Header'

import { HeroSection } from '@/components/Hero/HeroSection'
import { SloganSection } from '@/components/Slogan/SloganSection'
import { ServiceSection } from '@/components/Services/ServiceSection'
import { ReviewsSection } from '@/components/Reviews/ReviewsSection'
import { ChannelSection } from '@/components/Channel/ChannelSection'
import { ContactsSection } from '@/components/Contacts/ContactsSection'
import { getCategories } from '@/utils/sanity'

export const revalidate = 30

export default async function Home() {
  const categories = await getCategories()

  return (
    <div className="min-h-screen font-sans">
      <div className="pt-[calc(60px+1rem)] lg:pt-[calc(60px+1.75rem)]">
        <Header />
        <HeroSection />
        <SloganSection categories={categories} />
        <ServiceSection />
        <ReviewsSection />
        <ChannelSection />
        <ContactsSection />
      </div>
    </div>
  )
}
