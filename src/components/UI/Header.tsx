import { getInformation } from '@/utils/sanity';

export const Header = async () => {
  const title = (await getInformation()).name;

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full justify-center h-[60px] px-4 py-2 font-serif text-4xl bg-white">
      V
    </header>
  );
};
