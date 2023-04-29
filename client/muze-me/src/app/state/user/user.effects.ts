import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { 
  loadUser, 
  loadUserFailure, 
  loadUserSuccess,
  loginUser,
  loginUserFailure,
  loginUserSuccess,

} from './user.actions';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interfaces/user';

@Injectable()
export class OffersEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
      ) {}

    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUser),
            exhaustMap(() =>
                this.authService.getUser().pipe(
                    map((user: User) => loadUserSuccess({ user })),
                    catchError((error) => of(loadUserFailure({ error })))
                )
            )
        )
    );
    
    loginUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginUser),
            mergeMap((action) => 
              this.authService.signInWithEmail(action.email, action.password).pipe(
                map((user: User) => loginUserSuccess({ user })),
                catchError((error) => of(loginUserFailure({ error })))
            )
        )
    )
    );
}