import { TypedObject } from 'sanity'

export type Question = {
  _id: string
  name: string
  answer: TypedObject[]
}
