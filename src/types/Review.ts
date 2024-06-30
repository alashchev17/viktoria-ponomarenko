export type Review = {
  _id: string
  _createdAt: string
  personName: string
  personPosition: string
  personAvatar: string
  personAvatarAlt: string
  reviewType: 'text' | 'audio' | 'video'
  reviewAsset: string
  reviewSlogan: string
  reviewText: string
  duration: string
}
