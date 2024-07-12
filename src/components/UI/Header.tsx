import { getInformation } from '@/utils/sanity'

import { Button } from '@/components/UI/Button'
import { Title } from '@/components/UI/Title'
import { TelegramIcon } from '@/components/Icons/TelegramIcon'
import { InstagramIcon } from '@/components/Icons/InstagramIcon'

export const Header = async () => {
  const { links } = await getInformation()
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full justify-between items-center h-[60px] px-4 py-2 font-serif text-4xl border-b bg-blue">
      {links && (
        <div className="flex gap-2 items-center">
          {links.instagram_url && (
            <Button variant="icon" href={links.instagram_url}>
              <InstagramIcon fill="#0C174F" width="15" height="15" />
            </Button>
          )}
          {links.telegram_url && (
            <Button variant="icon" href={links.telegram_url}>
              <TelegramIcon fill="#0C174F" width="13.33" height="11.01" className="mr-[1px]" />
            </Button>
          )}
        </div>
      )}
      <Title
        level={1}
        className="text-white font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        V
      </Title>
      <Button variant={'inline'}>Записатися</Button>
    </header>
  )
}
