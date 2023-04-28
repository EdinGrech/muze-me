import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

import { authFeature } from './app/state/user/user.reducer';

if (environment.production) {
  enableProdMode();
}

//ref: https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app/blob/main/apps/conduit/src/main.ts

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
    provideStore({
      auth: authFeature.reducer,
    }),
    provideEffects(),
    provideRouterStore(),
    !environment.production ? provideStoreDevtools() : [],
  ],
});
