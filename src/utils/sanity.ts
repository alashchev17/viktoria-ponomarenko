import { createClient, groq } from 'next-sanity'

import type { Information } from '@/types/Information'
import type { Review } from '@/types/Review'
import type { Service, Category } from '@/types/Service'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export async function getInformation(): Promise<Information> {
  const [information]: Information[] = await client.fetch(
    groq`*[_type == "information"]{
      _id,
      _createdAt,
      name,
      description,
      "images": images[]{
        "url": image.asset->url,
        "width": image.asset->metadata.dimensions.width,
        "height": image.asset->metadata.dimensions.height,
        alt,
        device
      },
      "links": {
        "telegram_url": telegram,
        "youtube_url": youtube,
        "instagram_url": instagram,
        "tiktok_url": tiktok
      },
      "channel": {
        "name": telegram_name,
        "description": telegram_description,
        "image": {
          "width": telegram_image.asset->metadata.dimensions.width,
          "height": telegram_image.asset->metadata.dimensions.height,
          "alt": telegram_image.alt,
          "url": telegram_image.asset->url,
        }
      },
      copyright
    }`,
    {},
    { cache: 'no-store' },
  )

  return information
}

export async function getCategories(): Promise<Category[]> {
  const categories: Category[] = await client.fetch(
    groq`*[_type == "category"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`,
    {},
    { cache: 'no-store' },
  )

  return categories
}

export async function getServices(): Promise<Service[]> {
  const services: Service[] = await client.fetch(
    groq`*[_type == "service"]{
      _id,
      name,
      description,
      duration,
      price,
      link,
      "banner": {
        "url": image.asset->url,
        "alt": image.alt,
        "width": image.asset->metadata.dimensions.width,
        "height": image.asset->metadata.dimensions.height,
      },
      "questions": questionServices[]->{
        _id,
        name,
        answer
      },
      categories[]->{
        _id,
        title,
        "slug": slug.current
      }
    }`,
    {},
    { cache: 'no-store' },
  )

  return services
}

export async function getReviews(): Promise<Review[]> {
  const reviews: Review[] = await client.fetch(
    groq`*[_type == "review"]{
      _id,
      _createdAt,
      "person": {
        "name": personName,
        "position": personPosition,
        "avatar": personAvatar.asset->url,
        "avatar_alt": personAvatar.alt
      },
      "review": {
        "type": reviewType,
        "asset": reviewAsset.asset->url,
        duration,
        "slogan": reviewSlogan,
        "text": reviewText
      },
    }`,
    {},
    { cache: 'no-store' },
  )

  return reviews
}

export const decodeAssetByReference = (reference: string) => {
  const ImageReferencePattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/

  // eslint-disable-next-line no-unused-vars
  const [_, assetId, dimensions, format] = ImageReferencePattern.exec(reference) as Array<string>
  const [width, height] = dimensions.split('x').map(v => parseInt(v, 10))

  return {
    assetId,
    dimensions: { width, height },
    format,
  }
}
