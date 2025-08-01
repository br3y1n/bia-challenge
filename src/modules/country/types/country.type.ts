interface IBorderCountry {
  name: string;
  id: string;
}

interface Country {
  name: { common: string; official: string; native: string };
  population: string;
  id: string;
  region: string;
  subregion: string;
  capital: string;
  tld: string;
  currencies: string[];
  languages: string[];
  borders: IBorderCountry[];
  flag: {
    src: string;
    alt: string;
  };
}

export type { Country, IBorderCountry };
