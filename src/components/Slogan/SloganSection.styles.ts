'use client'

import styled from 'styled-components'
import { getTailwindConfig } from '@/lib/getTailwindConfig'

const fullConfig = getTailwindConfig()

export const Slogan = styled.section`
  position: relative;
  // background-color: ${fullConfig.theme.backgroundColor['dark-blue'] as string};
  // background-image: url('/section-bg.png');
  // background-size: cover;
  // background-position: center center;
  // background-repeat: no-repeat;
  // background-blend-mode: lighten;
  padding: 0 60px;
  // z-index: -1;
`

export const Container = styled.div`
  padding: 70px 0 110px 0;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 16px;
    max-width: 1140px;
    margin: 0 auto;
    padding: 120px 0 160px 0;
  }
`
export const Circle = styled.button`
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
`
