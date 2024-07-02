import Image from 'next/image';

import { getInformation } from '@/utils/sanity';

import { Title } from '@/components/UI/Title';

export const InformationSection = async () => {
  const information = await getInformation();

  return (
    <div className="flex flex-col gap-4 items-center mt-[calc(60px+1rem)]">
      <Image
        src={information.image}
        alt={information.image_alt}
        width={300}
        height={150}
      />
      <Title level={3} className="font-serif italic">
        {information.name}
      </Title>
      <div className="whitespace-pre-line">{information.description}</div>
    </div>
  );
};
