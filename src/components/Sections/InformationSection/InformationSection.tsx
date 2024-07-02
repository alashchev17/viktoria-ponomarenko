import Image from 'next/image';

import { getInformation } from '@/utils/sanity';

export const InformationSection = async () => {
  const information = await getInformation();

  return (
    <div>
      <div>Information</div>
      <div>Name: {information.name}</div>
      <div>
        Description:{' '}
        <div className="whitespace-pre-line">{information.description}</div>
      </div>
      <Image
        src={information.image}
        alt={information.image_alt}
        width={200}
        height={200}
      />
      {information.telegram ||
      information.instagram ||
      information.youtube ||
      information.tiktok ? (
        <div className="flex flex-col gap-2 justify-center items-center">
          <b>Links:</b>
          {information.telegram && (
            <a href={information.telegram} target="_blank">
              Telegram
            </a>
          )}
          {information.instagram && (
            <a href={information.instagram} target="_blank">
              Instagram
            </a>
          )}
          {information.youtube && (
            <a href={information.youtube} target="_blank">
              YouTube
            </a>
          )}
          {information.tiktok && (
            <a href={information.tiktok} target="_blank">
              TikTok
            </a>
          )}
        </div>
      ) : (
        <div>No links specified</div>
      )}
    </div>
  );
};
