import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { authActions } from './user.actions';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interfaces/user';

@Injectable()
export class OffersEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private user: User,
      ) {}

    logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.logout),
      tap(() => {
        this.router.navigateByUrl('login');
      }),
    );
  },
  { functional: true, dispatch: false },
);

    loginOrRegisterSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.loginSuccess, authActions.registerSuccess),
      tap((action) => {
        this.router.navigateByUrl('/');
      }),
    );
  },
);
}