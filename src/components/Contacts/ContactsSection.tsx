import { getInformation } from '@/utils/sanity'
import { Title } from '../UI/Title'
import { Contacts } from './ContactsSection.styles'
import { Information } from '@/types/Information'
import { Button } from '../UI/Button'
import type { ReactNode } from 'react'
import { TelegramIcon } from '../Icons/TelegramIcon'
import { InstagramIcon } from '../Icons/InstagramIcon'
import { getTailwindConfig } from '@/lib/getTailwindConfig'
import { YoutubeIcon } from '../Icons/YoutubeIcon'
import { TiktokIcon } from '../Icons/TiktokIcon'

interface LinkArray {
  name: string
  link: string
  icon?: () => ReactNode
}

export const ContactsSection = async () => {
  const { links, copyright } = await getInformation()
  const fullConfig = getTailwindConfig()
  const linksArray = [] as LinkArray[]

  Object.keys(links).forEach(key => {
    const link = links[key as keyof Information['links']]
    if (link) {
      linksArray.push({
        name: link,
        link: link,
        icon: () => {
          switch (key) {
            case 'telegram_url':
              return <TelegramIcon width={30} height={28} fill={fullConfig.theme.backgroundColor.bezh as string} />
            case 'instagram_url':
              return <InstagramIcon width={30} height={30} fill={fullConfig.theme.backgroundColor.bezh as string} />
            case 'youtube_url':
              return <YoutubeIcon fill={fullConfig.theme.backgroundColor.bezh as string} />
            case 'tiktok_url':
              return <TiktokIcon fill={fullConfig.theme.backgroundColor.bezh as string} />
            default:
              return null
          }
        },
      })
    }
  })

  return (
    <Contacts>
      <Title level={6} className="font-sans text-bezh uppercase font-bold">
        Контакти
      </Title>
      <div className="px-2 w-full flex justify-between">
        {linksArray.map(link => (
          <Button key={link.name} href={link.link} variant="icon" className="w-[80px] h-[80px]">
            {link.icon && link.icon()}
          </Button>
        ))}
      </div>
      {copyright && <p className="mt-5 font-sans text-bezh text-sm">{copyright}</p>}
    </Contacts>
  )
}
