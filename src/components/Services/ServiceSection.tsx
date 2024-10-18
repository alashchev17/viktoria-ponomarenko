import { getServices } from '@/utils/sanity'
import { ServiceCard } from './ServiceCard'
import { Title } from '../UI/Title'

export const ServiceSection = async () => {
  const services = await getServices()

  return (
    <div className="px-2 lg:px-6">
      <Title level={6} className="uppercase text-center font-bold mb-6">
        Послуги
      </Title>
      <div className="flex flex-col gap-8">
        {services.map(service => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  )
}
