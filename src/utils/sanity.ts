import type { Information } from '@/types/Information'
import type { Service } from '@/types/Service'
import { createClient, groq } from 'next-sanity'

export async function getInformation(): Promise<Information> {
  const client = createClient({
    projectId: 'fgy6qk8e',
    dataset: 'production',
    apiVersion: '2022-03-07',
  })

  const informationArray: Information[] = await client.fetch(
    groq`*[_type == "information"]{
    _id,
    _createdAt,
    name,
    description,
    "image": image.asset->url,
    "image_alt": image.alt
  }`,
    {},
    { useCdn: true, cache: 'no-store' }
  )

  console.log(`[SERVER]: Response from Sanity (information): ${JSON.stringify(informationArray)}`)

  return informationArray[0]
}

export async function getServices(): Promise<Service[]> {
  const client = createClient({
    projectId: 'fgy6qk8e',
    dataset: 'production',
    apiVersion: '2022-03-07',
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
      "questions": questions[]->{
        _id,
        name,
        answer
      }
    }`,
    {},
    { useCdn: true, cache: 'no-store' }
  )

  console.log(`[SERVER]: Response from Sanity (services): ${JSON.stringify(services)}`)

  return services
}
