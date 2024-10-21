import type { Service } from '@/types/Service'
import { Accordion } from '@/components/Accordion'

type ServiceCardBodyProps = {
  // description: Service['description']
  questions: Service['questions']
  isDesktop?: boolean
}

export const ServiceCardBody = ({ questions, isDesktop }: ServiceCardBodyProps) => {
  const itemsForAccordion = questions.map(question => ({
    _id: question._id,
    title: question.name,
    expandableText: question.answer,
  }))

  return (
    <div
      className="px-4 pt-6 flex flex-col gap-6"
      style={{
        overflowY: isDesktop ? 'auto' : 'hidden',
      }}
    >
      <Accordion items={itemsForAccordion} />
    </div>
  )
}
