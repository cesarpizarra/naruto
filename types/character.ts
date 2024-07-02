export type Character = {
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
    clan: any;
    classification: any;
  };
};

export type CharacterCardProps = {
  image: string;
  name: string;
  personal: {
    titles: string[];
    clan?: any;
    classification: any;
  };
};
