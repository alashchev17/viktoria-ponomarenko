import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { getInformation, decodeAssetByReference } from '@/utils/sanity';

import { Title } from '@/components/UI/Title';
import { ImageWithLoader } from '@/components/ImageWithLoader';

export const InformationSection = async () => {
  const information = await getInformation();

  const informationImageDimensions = decodeAssetByReference(
    information.image_ref,
  ).dimensions;

  return (
    <div className="flex flex-col gap-4 items-center mt-[calc(60px+1rem)]">
      <ImageWithLoader
        src={information.image}
        alt={information.image_alt}
        padding="px-12"
        imageWidth={informationImageDimensions.width}
        imageHeight={informationImageDimensions.height}
        loader={
          <Skeleton
            containerClassName="w-full inline-block"
            className="inline-block w-full"
            style={{ aspectRatio: 359 / 570 }}
          />
        }
        // loading="lazy"
        // width={300}
        // height={600}
      />
      {/* <Image
        src={information.image}
        alt={information.image_alt}
        loading="lazy"
        width={300}
        height={600}
      /> */}

      {/* <div className="w-full">
        <Skeleton
          containerClassName="h-[30px] w-full inline-block"
          className="inline-block w-full"
        />
      </div> */}
      <Title level={3} className="font-serif-italic italic-cyrillic">
        {information.name}
      </Title>
      <div className="whitespace-pre-line">{information.description}</div>
    </div>
  );
};
