export type QuoteFormBookOption = {
  id: number;
  title: string;
  maxChapters: number;
};

export const QUOTE_FORM_CHARACTERS = [
  'Carl',
  'Princess Donut',
  'Mordecai',
  'Odette',
  'Prepotente',
  'Samantha',
  'Zev',
  'Cascadia',
] as const;

/** Book ids align with `bookNumber` on submitted quotes. */
export const QUOTE_FORM_BOOKS: QuoteFormBookOption[] = [
  { id: 1, title: 'Dungeon Crawler Carl', maxChapters: 60 },
  { id: 2, title: "Carl's Doomsday Scenario", maxChapters: 55 },
  { id: 3, title: "The Dungeon Anarchist's Cookbook", maxChapters: 65 },
  { id: 4, title: 'The Gate of the Feral Gods', maxChapters: 60 },
  { id: 5, title: "The Butcher's Masquerade", maxChapters: 70 },
  { id: 6, title: 'The Eye of the Bedlam Bride', maxChapters: 65 },
  { id: 7, title: 'This Inevitable Ruin', maxChapters: 60 },
];

export type QuoteFormOptions = {
  characters: readonly string[];
  books: QuoteFormBookOption[];
};

export const QUOTE_FORM_OPTIONS: QuoteFormOptions = {
  characters: QUOTE_FORM_CHARACTERS,
  books: QUOTE_FORM_BOOKS,
};
