import { News } from '../../interfaces/news';
import { createReducer, on, createFeature } from '@ngrx/store';
import { loadNews, loadNewsSuccess, loadNewsFailure } from './news.actions';

export interface NewsState {
  news: News[];
  error: any;
  loading: boolean;
}

export const initialState: NewsState = {
  news: [],
  error: null,
  loading: false,
};

export const newsReducer = createReducer(
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
