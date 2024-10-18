import { getInformation } from '@/utils/sanity'

import { HeroSectionLayout } from '@/components/Hero/HeroSectionLayout'

const keywords = ['Аура', 'Зцілення', 'Цілісність', 'Любов']

export const HeroSection = async () => {
  const { name, description, images } = await getInformation()

  return <HeroSectionLayout name={name} description={description} images={images} keywords={keywords} />
}
