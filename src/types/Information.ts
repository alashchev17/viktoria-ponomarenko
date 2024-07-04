export type Information = {
  _id: string;
  _createdAt: string;
  name: string;
  description: string;
  image: InformationImage;
  telegram: string | null;
  youtube: string | null;
  instagram: string | null;
  tiktok: string | null;
};

type InformationImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};
