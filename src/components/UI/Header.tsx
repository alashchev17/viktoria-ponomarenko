import { getInformation } from '@/utils/sanity'

import { Button } from '@/components/UI/Button'
import { Title } from '@/components/UI/Title'
import { TelegramIcon } from '@/components/Icons/TelegramIcon'
import { InstagramIcon } from '@/components/Icons/InstagramIcon'

import { getTailwindConfig } from '@/lib/getTailwindConfig'

export const Header = async () => {
  const { links } = await getInformation()
  const fullConfig = getTailwindConfig()

  return (
    <header className="fixed top-2 left-[50%] translate-x-[-50%] z-50 flex w-[calc(100%-1rem)] justify-between items-center px-2 py-3 font-serif text-4xl border-2 rounded-xl bg-dark-blue">
      {links && (
        <div className="flex gap-2 items-center">
          {links.instagram_url && (
            <Button variant="icon" href={links.instagram_url}>
              <InstagramIcon fill={fullConfig.theme.backgroundColor.bezh as string} width="20" height="20" />
            </Button>
          )}
          {links.telegram_url && (
            <Button variant="icon" href={links.telegram_url}>
              <TelegramIcon
                fill={fullConfig.theme.backgroundColor.bezh as string}
                width="18"
                height="18"
                className="mr-[2px]"
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
      <Button variant="inline" href={links.telegram_url ? links.telegram_url : undefined}>
        Записатися
      </Button>
    </header>
  )
}
