import { newsPost } from '../../interfaces/news-post';
import { createReducer, on, createFeature } from '@ngrx/store';
import { 
  storeNewsPost,
  storeNewsPostSuccess,
  storeNewsPostFailure,
  loadStoredNewsPost,
  loadStoredNewsPostSuccess,
  loadStoredNewsPostFailure,
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
  on(storeNewsPost, (state, action) => ({
    ...state,
    newsFullData: action.newsFullData,
  })),
  on(storeNewsPostSuccess, (state) => ({
    ...state,
  })),
  on(storeNewsPostFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(loadStoredNewsPost, (state) => ({
    ...state,
  })),
  on(loadStoredNewsPostSuccess, (state, { newsFullData }) => ({
    ...state,
    newsFullData,
  })),
  on(loadStoredNewsPostFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
