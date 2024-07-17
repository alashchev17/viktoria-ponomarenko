export type Review = {
  _id: string
  _createdAt: string
  person: {
    name: string
    position: string
    avatar: string
    avatar_alt: string
  }
  review: {
    type: 'text' | 'audio' | 'video'
    asset: string
    duration: string
    slogan: string | null
    text: string | null
  }
}
