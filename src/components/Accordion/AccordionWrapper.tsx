'use client'

import { TypedObject } from 'sanity'
import { AccordionItem } from './AccordionItem'
import { useState } from 'react'

type AccordionWrapperProps = {
  items: {
    _id: string
    title: string
    expandableText: TypedObject[]
  }[]
}

export const AccordionWrapper = ({ items }: AccordionWrapperProps) => {
  const [expandedElement, setExpandedElement] = useState<string | null>(null)

  return (
    <div>
      {items.map(({ _id, title, expandableText }) => (
        <AccordionItem
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
