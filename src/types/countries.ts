export interface Country {
  flags: Flags;
  name: Name;
  cca3: string;
  capital: string[];
  region: Region;
  population: number;
  tld?: string[];
  currencies?: { [key: string]: Currency };
  subregion?: string;
  languages?: { [key: string]: string };
  borders?: string[];
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export type CountryCode = {
  [code: string]: string;
};
