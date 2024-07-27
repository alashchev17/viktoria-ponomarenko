'use client'

import styled from 'styled-components'
import { getTailwindConfig } from '@/lib/getTailwindConfig'

const fullConfig = getTailwindConfig()

export const Container = styled.div`
  padding: 110px 0;
  overflow: hidden;
`
export const Circle = styled.div`
  position: relative;
  max-width: 358px;
  margin: 0 auto;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  display: flex;
  // padding: 75.5px 10px 62.5px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${fullConfig.theme.backgroundColor.bezh};
  border: 2px solid ${fullConfig.theme.backgroundColor.bezh};
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(50% 50% at 50% 50%, #cb99d9 0%, rgba(203, 153, 217, 0) 100%);
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 80px;
    background: ${fullConfig.theme.backgroundColor.bezh};
    z-index: -1;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
  }
`
