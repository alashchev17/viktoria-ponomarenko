'use client'

import React from 'react'

type SliderButtonProps = {
  onClick?: () => void
  direction: string
}

export const SliderButton = ({ onClick, direction }: SliderButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`slider-button slider-button-${direction}`}
    >
      {direction === 'prev' ? '←' : '→'}
    </button>
  )
}
