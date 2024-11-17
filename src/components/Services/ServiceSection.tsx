import { getServices } from '@/utils/sanity'
import { ServiceCard } from './ServiceCard'
import { Title } from '../UI/Title'
import type { Service, GroupedServices } from '@/types/Service'

const groupByCategories = (services: Service[]): GroupedServices => {
  const grouped: GroupedServices = {}
  services.forEach(service => {
    service.categories.forEach(category => {
      if (!grouped[category.slug]) {
        grouped[category.slug] = {
          categoryTitle: category.title,
          services: [],
        }
      }
      grouped[category.slug].services.push(service)
    })
  })

  return grouped
}

export const ServiceSection = async () => {
  const services = await getServices()
  const groupedServices = groupByCategories(services)

  return (
    <div className="flex flex-col gap-8">
      {Object.keys(groupedServices).map(categorySlug => (
        <div key={categorySlug} className="px-2 lg:px-6" id={categorySlug}>
          <Title level={6} className="uppercase text-center font-bold mb-6 lg:mb-8">
            {groupedServices[categorySlug].categoryTitle}
          </Title>
          <div className="flex flex-col gap-8">
            {groupedServices[categorySlug].services.map(service => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// <Title level={6} className="uppercase text-center font-bold mb-6 lg:mb-8">
//   Послуги
// </Title>
// <div className="flex flex-col gap-8">
//   {services.map(service => (
//     <ServiceCard key={service._id} service={service} />
//   ))}
// </div>
