'use client'

import { TypedObject } from 'sanity'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { AccordionArrow } from '@/components/Icons/AccordionArrow'
import { useEffect, useRef } from 'react'

export type AccordionItemProps = {
  title: string
  expandableText: TypedObject[]
  isExpanded: boolean
  onClick: () => void
}

export const AccordionItem = ({ title, expandableText, isExpanded, onClick }: AccordionItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null)

  const customAnswerComponents: PortableTextComponents = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
      blockquote: ({ children }) => <blockquote className="border-l-purple-500">{children}</blockquote>,
      normal: ({ children }) => <p className="text-sm font-light">{children}</p>,
    },
    marks: {
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="font-sans italic">{children}</em>,
      underline: ({ children }) => <span className="underline">{children}</span>,
      'strike-through': ({ children }) => <span className="line-through">{children}</span>,
    },
  }

  useEffect(() => {
    if (itemRef.current) {
      if (isExpanded) {
        itemRef.current.style.height = `${itemRef?.current?.scrollHeight}px`
      } else {
        itemRef.current.style.height = '0px'
      }
    }
  }, [isExpanded])

  return (
    <div className={`flex flex-col py-4 pl-4 pr-[10px] border-t-[1px] border-[#97B4DE]`}>
      <div onClick={onClick} className="flex justify-between items-center">
        <span className="font-semibold uppercase text-base">{title}</span>
        <AccordionArrow
          className={`${isExpanded ? 'rotate-180' : null} transition-transform ease-in-out duration-500`}
        />
      </div>
      <div
        ref={itemRef}
        className={`transition-all ease-in-out overflow-hidden duration-500 ${document.readyState === 'loading' && 'h-0'}`}
      >
        <div className="mt-4" />
        <PortableText value={expandableText} components={customAnswerComponents} />
      </div>
    </div>
  )
}
