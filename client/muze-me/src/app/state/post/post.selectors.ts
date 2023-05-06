import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { NewsPostState } from './post.reducer';

export const selectPost = (state: AppState) => state.post;

export const selectNewsFullData = createSelector(
    selectPost,
    (state: NewsPostState) => state.newsFullData
);


