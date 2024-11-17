'use client'
import type { Category } from '@/types/Service'
import { smoothScrollTo } from '@/utils/smoothScrollTo'
import { Container, Circle, Slogan } from './SloganSection.styles'
import { Title } from '@/components/UI/Title'

type SloganSectionProps = {
  categories: Category[]
}

export const SloganSection = ({ categories }: SloganSectionProps) => {
  return (
    <Slogan>
      <Container>
        {categories
          .sort((a, b) => new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime())
          .map(category => (
            <Circle key={category._id} onClick={() => smoothScrollTo(category.slug)}>
              <Title
                level={1}
                className="absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-serif-italic leading-[90%] text-center font-light w-[252px]"
              >
                {category.title}
              </Title>
            </Circle>
          ))}
      </Container>
    </Slogan>
  )
}
