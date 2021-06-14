export type DataType = {
  results: Array<filmType>;
};

export type filmType = {
  opening_crawl: string;
  characters: Array<string>;
  title: string;
  url: string;
  release_date?: string;
};

export type characterType = {
  name: string;
  height: string;
  gender: string;
};
