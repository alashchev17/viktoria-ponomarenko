import type { Question } from '@/types/Question'

export type Service = {
  _id: string
  name: string
  description: string
  duration: string
  price: number
  link: string
  questions: Question[]
  banner: ServiceBanner
}

type ServiceBanner = {
  url: string
  alt: string
  width: number
  height: number
}
