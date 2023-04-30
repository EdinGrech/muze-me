import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';

import {
  loadNews,
  loadNewsFailure,
  loadNewsSuccess,
} from './news.actions';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interfaces/user';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
  ) {}


}
