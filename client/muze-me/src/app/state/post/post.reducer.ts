import { newsPost } from '../../interfaces/news-post';
import { createReducer, on, createFeature } from '@ngrx/store';
import { 
  storeNewsPost,
 } from './post.actions';

export interface NewsPostState {
  newsFullData: newsPost;
  error: any;
}

export const initialState: NewsPostState = {
  newsFullData: 
  {news:{
    id: 0,
    source_id: null,
    source_name: null,
    author: null,
    title: '',
    description: '',
    url: '',
    urlToImage: null,
    publishedAt: '',
    content: null,
    sentement: 0,
    list_of_keywords: '',
  },
    showSource_name: false,
    showAuthor: false,
    showPublishedAt: false,
    publishedAt: '',
    showSentement: false,
    sentimentEmoji: '',
    showList_of_keywords: false,
    keywords: [],
  },
  error: null,
};

export const newsPostReducer = createReducer(
  initialState,
  on(storeNewsPost, (state, { newsFullData }) => ({
    ...state,
    newsFullData: newsFullData,
  })),
);
