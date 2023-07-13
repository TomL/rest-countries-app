// Type definition for the data returned from the API, just the fields that
// we intend to use
export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  capital?: string;
  subregion: string;
  region: Region;
  population: number;
  borders?: string[];
  nativeName: string;
  flags: Flags;
  currencies?: Currency[];
  languages: Language[];
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Flags {
  svg: string;
  png: string;
}

export interface Language {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  AntarcticOcean = 'Antarctic Ocean',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
  Polar = 'Polar',
}

export type CountryCode = {
  [code: string]: string;
};
