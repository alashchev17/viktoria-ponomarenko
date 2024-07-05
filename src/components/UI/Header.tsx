import { getInformation } from '@/utils/sanity';

import { Button } from '@/components/UI/Button';
import { TelegramIcon } from '@/components/Icons/TelegramIcon';
import { InstagramIcon } from '@/components/Icons/InstagramIcon';

export const Header = async () => {
  const { links } = await getInformation();
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full justify-between items-center h-[60px] px-4 py-2 font-serif text-4xl bg-gray-200">
      {links && (
        <div className="flex gap-2 items-center">
          {links.instagram_url && (
            <Button variant="icon" href={links.instagram_url}>
              <InstagramIcon
                fill="#0C174F"
                width="15"
                height="15"
                className="mr-[1px]"
              />
            </Button>
          )}
          {links.telegram_url && (
            <Button variant="icon" href={links.telegram_url}>
              <TelegramIcon
                fill="#0C174F"
                width="13.33"
                height="11.01"
                className="mr-[1px]"
              />
            </Button>
          )}
        </div>
      )}
    </header>
  );
};
