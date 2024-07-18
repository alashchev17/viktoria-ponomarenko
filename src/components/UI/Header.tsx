import { getInformation } from '@/utils/sanity'

import { Button } from '@/components/UI/Button'
import { Title } from '@/components/UI/Title'
import { TelegramIcon } from '@/components/Icons/TelegramIcon'
import { InstagramIcon } from '@/components/Icons/InstagramIcon'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config'

export const Header = async () => {
  const { links } = await getInformation()

  const fullConfig = resolveConfig(tailwindConfig)
  return (
    <header className="fixed top-2 left-[50%] translate-x-[-50%] z-50 flex w-[95%] justify-between items-center px-2 py-3 font-serif text-4xl border-2 rounded-xl bg-dark-blue">
      {links && (
        <div className="flex gap-2 items-center">
          {links.instagram_url && (
            <Button variant="icon" href={links.instagram_url}>
              <InstagramIcon fill={fullConfig.theme.backgroundColor.bezh as string} width="15" height="15" />
            </Button>
          )}
          {links.telegram_url && (
            <Button variant="icon" href={links.telegram_url}>
              <TelegramIcon
                fill={fullConfig.theme.backgroundColor.bezh as string}
                width="13.33"
                height="11.01"
                className="mr-[1px]"
              />
            </Button>
          )}
        </div>
      )}
      <Title
        level={1}
        className="text-bezh font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        V
      </Title>
      <Button variant={'inline'}>Записатися</Button>
    </header>
  )
}
