import { newsPost } from '../../interfaces/news-post';
import { createAction, props } from '@ngrx/store';

export const storeNewsPost = createAction(
  '[News] Load news',
  props<{ newsFullData: newsPost }>()
);

export const storeNewsPostSuccess = createAction(
  '[User] Load News Success');

export const storeNewsPostFailure = createAction(
  '[User] Load News Failure',
  props<{ error: any }>()
);

export const loadStoredNewsPost = createAction(
  '[User] Load News Success');

export const loadStoredNewsPostSuccess = createAction(
  '[User] Load News Success',
  props<{ newsFullData: newsPost }>()
);

export const loadStoredNewsPostFailure = createAction(
  '[User] Load News Failure',
  props<{ error: any }>()
);