import Image from 'next/image'
import { PortableText } from '@portabletext/react'

import { getServices } from '@/utils/sanity'

export const ServiceSection = async () => {
  const services = await getServices()

  return (
    <div>
      <b>Services:</b>
      {services.map((service) => (
        <div key={service._id}>
          <div>Service Name: {service.name}</div>
          <div>
            Service Description: <div className="whitespace-pre-line">{service.description}</div>
          </div>
          <Image src={service.banner_url} alt={service.banner_alt} width={200} height={200} />
          <div>Price: {service.price}</div>
          <div>Duration: {service.duration}</div>
          <div>Questions:</div>
          {service.questions ? (
            <div>
              {service.questions.map((question) => {
                return (
                  <div key={question._id} className="mb-4">
                    <div>Question Text: {question.name}</div>{' '}
                    <div>
                      Answer: <PortableText value={question.answer} />
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div>No questions added.</div>
          )}
        </div>
      ))}
    </div>
  )
}
