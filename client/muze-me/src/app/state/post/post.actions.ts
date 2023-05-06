import { newsPost } from '../../interfaces/news-post';
import { createAction, props } from '@ngrx/store';

export const storeNewsPost = createAction(
  '[News] Load news',
  props<{ newsFullData: newsPost }>()
);