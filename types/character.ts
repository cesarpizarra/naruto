export type Character = {
  id: string;
  name: string;
  images: string[];
  debut: any;
  family: {
    father: string;
    mother: string;
    son: string;
    daughter: string;
    wife: string;
    godfather: string;
  };
  jutsu: string[];
  tools: string[];
  natureType: string[];
  uniqueTraits: string[];
  voiceActors: string[];
  personal: {
    titles: string[];
    clan: any;
    classification: any;
    birthdate: string;
    sex: string;
    kekkeiGenkai: any;
    affiliation: any;
  };
};

export type CharacterCardProps = {
  id: any;
  image: string;
  name: string;
  personal: {
    titles: string[];
    clan?: any;
    classification: any;
  };
};
