'use client'

import { Title } from '@/components/UI/Title'
import { useWindow } from '@/hooks/useWindow'

export const HeaderTitle = () => {
  const { isMobile } = useWindow()
  return (
    <Title
      level="auto"
      className="text-bezh font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl lg:text-3xl"
    >
      {isMobile ? 'V' : 'Viktoriia Ponomarenko'}
    </Title>
  )
}
