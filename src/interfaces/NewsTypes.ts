import {CalendarSpec} from 'moment';

export interface Article {
  source: {
    id: null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: CalendarSpec;
  content: string;
}

export interface NewsInterface {
  status: string;
  totalResults: number;
  articles: Article[];
}
