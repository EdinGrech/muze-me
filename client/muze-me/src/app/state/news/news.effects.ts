import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { loadNews, loadNewsFailure, loadNewsSuccess } from './news.actions';

import { NewsService } from '../../services/news.service';

@Injectable()
export class NewsEffects {
  constructor(private actions$: Actions, private newsService: NewsService) {}

  loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNews),
      exhaustMap((action) =>
        this.newsService.getNews(action.page, action.tollerance).pipe(
          map((news) => loadNewsSuccess({ news })),
          catchError((error) => of(loadNewsFailure({ error })))
        )
      )
    )
  );
}
