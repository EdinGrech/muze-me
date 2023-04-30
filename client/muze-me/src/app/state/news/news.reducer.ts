import { News } from '../../interfaces/news';
import { createReducer, on, createFeature } from '@ngrx/store';
import {
  loadNews,
  loadNewsSuccess,
  loadNewsFailure,
} from './news.actions';

export interface UserState {
  news: News;
  error: any;
  loading: boolean;
}

export const initialState: UserState = {
  news: {
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
  error: null,
  loading: false,
};

export const userAuthReducer = createReducer(
  initialState,
  on(loadNews, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadNewsSuccess, (state, { news }) => ({
    ...state,
    news,
    loading: false,
  })),
  on(loadNewsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
