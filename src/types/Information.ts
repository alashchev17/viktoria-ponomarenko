export type Information = {
  _id: string
  _createdAt: string
  name: string
  description: string
  images: InformationImage[]
  links: InformationLinks
  channel: InformationChannel
  copyright?: string
}

export type InformationImage = {
  url: string
  width: number
  height: number
  alt: string
  device: 'mobile' | 'desktop'
}

export type InformationLinks = {
  telegram_url: string | null
  youtube_url: string | null
  instagram_url: string | null
  tiktok_url: string | null
}

export type ChannelImage = Omit<InformationImage, 'device'>

export type InformationChannel = {
  name: string
  description: string
  image: ChannelImage
}
