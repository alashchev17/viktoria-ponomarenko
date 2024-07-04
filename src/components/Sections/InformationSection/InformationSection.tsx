import Image from 'next/image';

import { getInformation } from '@/utils/sanity';

import { Title } from '@/components/UI/Title';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';

export const InformationSection = async () => {
  const information = await getInformation();

  return (
    <div className="flex flex-col gap-4 items-center mt-[calc(60px+1rem)]">
      <Suspense fallback={<Skeleton width={300} height={600} count={1} />}>
        <Image
          src={information.image}
          alt={information.image_alt}
          loading="lazy"
          width={300}
          height={600}
        />
      </Suspense>
      <Title level={3} className="font-serif italic-cyrillic">
        {information.name}
      </Title>
      <div className="whitespace-pre-line">{information.description}</div>
    </div>
  );
};
