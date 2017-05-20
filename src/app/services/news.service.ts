import { Injectable } from '@angular/core';
import { News } from '../models/news';

import { MOCK_NEWS } from './mock-news';

@Injectable()
export class NewsService {

  constructor() { }

  getNews(): Promise<News[]> {
    return Promise.resolve(MOCK_NEWS);
  }

}
