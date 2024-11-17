'use client'

import styled from 'styled-components'
import { getTailwindConfig } from '@/lib/getTailwindConfig'

const fullConfig = getTailwindConfig()

export const Slogan = styled.section`
  position: relative;
  padding: 0 60px;
`

export const Container = styled.div`
  padding: 70px 0 110px 0;
  overflow: hidden;
  display: flex;
  gap: 16px;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    max-width: 1140px;
    margin: 0 auto;
    padding: 120px 0 160px 0;
    flex-wrap: wrap;
  }
`
export const Circle = styled.button`
  position: relative;
  max-width: 358px;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${fullConfig.theme.backgroundColor.bezh};
  border: 2px solid ${fullConfig.theme.backgroundColor.bezh};
`
