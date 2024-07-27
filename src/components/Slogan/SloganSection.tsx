import { Title } from '@/components/UI/Title'
import { Container, Circle } from './SloganSection.styles'

export const SloganSection = () => {
  return (
    <Container>
      <Circle>
        <Title level={1} className="font-serif-italic leading-[90%] text-center font-light text-5xl max-w-[252px]">
          З‘єднайся зі своєю душею і відчуй істинного себе
        </Title>
      </Circle>
    </Container>
  )
}
