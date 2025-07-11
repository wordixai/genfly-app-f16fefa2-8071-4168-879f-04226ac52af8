export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface TravelPhrase {
  id: string;
  category: string;
  english: string;
  translation: string;
  pronunciation?: string;
}

export interface PhraseCategory {
  id: string;
  name: string;
  icon: string;
  phrases: TravelPhrase[];
}