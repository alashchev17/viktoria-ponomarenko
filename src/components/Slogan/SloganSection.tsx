import { Title } from '@/components/UI/Title'
import { Container, Circle } from './SloganSection.styles'

export const SloganSection = () => {
  return (
    <Container>
      <Circle>
        <Title
          level={1}
          className="absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-serif-italic leading-[90%] text-center font-light text-5xl w-[252px]"
        >
          З‘єднайся зі своєю душею і відчуй істинного себе
        </Title>
      </Circle>
    </Container>
  )
}
