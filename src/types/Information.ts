export type Information = {
  _id: string
  _createdAt: string
  name: string
  description: string
  image: InformationImage
  links: InformationLinks
  channel: InformationChannel
  copyright?: string
}

type InformationImage = {
  url: string
  alt: string
  width: number
  height: number
}

type InformationLinks = {
  telegram_url: string | null
  youtube_url: string | null
  instagram_url: string | null
  tiktok_url: string | null
}

type InformationChannel = {
  name: string
  description: string
  image: InformationImage
}
