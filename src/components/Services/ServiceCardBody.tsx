import type { Service } from '@/types/Service'
import { Accordion } from '@/components/Accordion'

type ServiceCardBodyProps = {
  description: Service['description']
  questions: Service['questions']
}

export const ServiceCardBody = ({ description, questions }: ServiceCardBodyProps) => {
  const itemsForAccordion = questions.map(question => ({
    _id: question._id,
    title: question.name,
    expandableText: question.answer,
  }))

  return (
    <div className="px-4 pt-6 flex flex-col gap-6">
      <p className="font-light text-sm">{description}</p>
      <Accordion items={itemsForAccordion} />
    </div>
  )
}
