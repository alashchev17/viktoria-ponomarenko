import Image from 'next/image'
import { getInformation, getServices } from '@/utils/sanity'

export const revalidate = 30

export default async function Home() {
  const information = await getInformation()
  const services = await getServices()

  if (!information) {
    return <div>No information found!</div>
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <b>Information</b>
      <div>Name: {information.name}</div>
      <div>Description: {information.description}</div>
      <Image src={information.image} alt={information.image_alt} width={200} height={200} />
      <b>Services:</b>
      {services.map((service) => (
        <div key={service._id}>
          <div>Service Name: {service.name}</div>
          <div>Service Description: {service.description}</div>
          <Image src={service.banner_url} alt={service.banner_alt} width={200} height={200} />
          <div>Price: {service.price}</div>
          <div>Duration: {service.duration}</div>
          <div>Questions:</div>
          {service.questions ? (
            <div>
              {service.questions.map((question) => {
                return (
                  <div key={question._id} className="mb-4">
                    <div>Question Text: {question.name}</div> <div>Answer: {question.answer}</div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div>No questions added.</div>
          )}
        </div>
      ))}
      {information.telegram || information.instagram || information.youtube || information.tiktok ? (
        <div className="flex flex-col gap-2 justify-center items-center">
          <b>Links:</b>
          {information.telegram && (
            <a href={information.telegram} target="_blank">
              Telegram
            </a>
          )}
          {information.instagram && (
            <a href={information.instagram} target="_blank">
              Instagram
            </a>
          )}
          {information.youtube && (
            <a href={information.youtube} target="_blank">
              YouTube
            </a>
          )}
          {information.tiktok && (
            <a href={information.tiktok} target="_blank">
              TikTok
            </a>
          )}
        </div>
      ) : (
        <div>No links specified</div>
      )}
    </div>
  )
}
