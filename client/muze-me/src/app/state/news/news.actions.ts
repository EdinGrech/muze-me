import { News } from '../../interfaces/news';
import { createAction, props } from '@ngrx/store';

export const loadNews = createAction(
  '[News] Load news',
  props<{ page: number, tollerance: number }>());

export const loadNewsSuccess = createAction(
  '[User] Load News Success',
  props<{ news: News[] }>()
);

export const loadNewsFailure = createAction(
  '[User] Load News Failure',
  props<{ error: any }>()
);
