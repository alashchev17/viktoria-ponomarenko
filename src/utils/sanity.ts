import { createClient, groq } from 'next-sanity'

import type { Information } from '@/types/Information'
import type { Review } from '@/types/Review'
import type { Service } from '@/types/Service'

export async function getInformation(): Promise<Information> {
  const client = createClient({
    projectId: 'fgy6qk8e',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
  })

  const informationArray: Information[] = await client.fetch(
    groq`*[_type == "information"]{
    _id,
    _createdAt,
    name,
    description,
    "image": image.asset->url,
    "image_alt": image.alt,
    telegram,
    youtube,
    instagram,
    tiktok
  }`,
    {},
    { cache: 'no-store' }
  )

  return informationArray[0]
}

export async function getServices(): Promise<Service[]> {
  const client = createClient({
    projectId: 'fgy6qk8e',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
  })

  const services: Service[] = await client.fetch(
    groq`*[_type == "service"]{
      _id,
      name,
      description,
      duration,
      price,
      "banner_url": image.asset->url,
      "banner_alt": image.alt,
      "questions": questionServices[]->{
        _id,
        name,
        answer
      }
    }`,
    {},
    { cache: 'no-store' }
  )

  return services
}

export async function getReviews(): Promise<Review[]> {
  const client = createClient({
    projectId: 'fgy6qk8e',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
  })

  const reviews: Review[] = await client.fetch(
    groq`*[_type == "review"]{
      _id,
      _createdAt,
      personName,
      personPosition,
      "personAvatar": personAvatar.asset->url,
      "personAvatarAlt": personAvatar.alt,
      reviewType,
      "reviewAsset": reviewAsset.asset->url,
      duration,
      reviewSlogan,
      reviewText
    }`,
    {},
    { cache: 'no-store' }
  )

  return reviews
}
