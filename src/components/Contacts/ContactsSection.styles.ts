'use client'

import styled from 'styled-components'
import { getTailwindConfig } from '@/lib/getTailwindConfig'

const fullConfig = getTailwindConfig()

export const Contacts = styled.div`
  padding-top: 90px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: ${fullConfig.theme.backgroundColor['dark-blue'] as string};
  background-image: url('/contacts-bg.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: lighten;
`
