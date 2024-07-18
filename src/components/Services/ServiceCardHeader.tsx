import { Title } from '../UI/Title'

type ServiceCardHeaderProps = {
  title: string
}

export const ServiceCardHeader = ({ title }: ServiceCardHeaderProps) => {
  return (
    <Title className="px-4 py-4 font-serif-italic uppercase" level={3}>
      {title}
    </Title>
  )
}
