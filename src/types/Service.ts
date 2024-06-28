import type { Question } from '@/types/Question'

export type Service = {
  _id: string
  name: string
  description: string
  duration: string
  price: number
  banner_url: string
  banner_alt: string
  questions: Question[]
}
