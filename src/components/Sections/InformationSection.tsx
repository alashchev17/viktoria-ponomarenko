import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { getInformation } from '@/utils/sanity';

import { Title } from '@/components/UI/Title';
import { ImageWithLoader } from '@/components/ImageWithLoader';

export const InformationSection = async () => {
  const information = await getInformation();

  return (
    <div className="flex flex-col gap-4 items-center mt-[calc(60px+1rem)]">
      <ImageWithLoader
        src={information.image.url}
        alt={information.image.alt}
        padding="px-[23%]"
        imageWidth={information.image.width}
        imageHeight={information.image.height}
        loader={
          <Skeleton
            containerClassName="w-full inline-block leading-none"
            className="inline-block w-full leading-none"
            style={{
              aspectRatio: information.image.width / information.image.height,
            }}
          />
        }
      />
      <Title level={3} className="font-serif-italic italic-cyrillic">
        {information.name}
      </Title>
      <div className="whitespace-pre-line">{information.description}</div>
    </div>
  );
};
