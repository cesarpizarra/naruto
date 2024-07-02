export type Tailed = {
  id: string;
  name: string;
  images: string[];
  debut: any;
  family: any;
  jutsu: string[];
  natureType: string[];
  uniqueTraits: string[];
  voiceActors: string[];
  personal: {
    titles: string[];
    classification?: any;
  };
};

export type TailedCardProps = {
  image: string;
  name: string;
  personal: {
    classification?: any;
  };
};
