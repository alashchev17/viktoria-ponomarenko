'use client'
import { Title } from '@/components/UI/Title'
import { Container, Circle, Slogan } from './SloganSection.styles'
import { smoothScrollTo } from '@/utils/smoothScrollTo'

export const SloganSection = () => {
  return (
    <Slogan>
      <Container>
        <Circle onClick={() => smoothScrollTo('services')}>
          <Title
            level={1}
            className="absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-serif-italic leading-[90%] text-center font-light w-[252px]"
          >
            Навчання
          </Title>
        </Circle>
        <Circle onClick={() => smoothScrollTo('services')}>
          <Title
            level={1}
            className="absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-serif-italic leading-[90%] text-center font-light w-[252px]"
          >
            Індивідуальні послуги
          </Title>
        </Circle>
        <Circle onClick={() => smoothScrollTo('services')}>
          <Title
            level={1}
            className="absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-serif-italic leading-[90%] text-center font-light w-[252px]"
          >
            Груповий ченелінг
          </Title>
        </Circle>
      </Container>
    </Slogan>
  )
}
