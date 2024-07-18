'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

import { TypedObject } from 'sanity'

type AccordionWrapperProps = {
  items: {
    _id: string
    title: string
    expandableText: TypedObject[]
  }[]
}

const DynamicAccordionItem = dynamic(() => import('./AccordionItem'), { ssr: false })

export const Accordion = ({ items }: AccordionWrapperProps) => {
  const [expandedElement, setExpandedElement] = useState<string | null>(null)

  return (
    <div>
      {items.map(({ _id, title, expandableText }) => (
        <DynamicAccordionItem
          key={_id}
          title={title}
          expandableText={expandableText}
          isExpanded={expandedElement === _id}
          onClick={() => setExpandedElement(expandedElement === _id ? null : _id)}
        />
      ))}
    </div>
  )
}
