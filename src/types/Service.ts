import type { Question } from '@/types/Question'

export type Service = {
  _id: string
  name: string
  description: string
  duration: string
  price: number
  link: string
  questions: Question[]
  categories: Category[]
  banner: ServiceBanner
}

export type Category = {
  _id: string
  _createdAt: string
  title: string
  slug: string
}

type ServiceBanner = {
  url: string
  alt: string
  width: number
  height: number
}

export type GroupedServices = {
  [categorySlug: string]: {
    categoryTitle: string
    services: Service[]
  }
}
