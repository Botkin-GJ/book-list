import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { BookRestService } from './services/book-rest.service';
import { bookList, bookListReducer } from './store/book-list/book-list.reducer';
import { BookListEffects } from './store/book-list/book-list.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({[bookList]: bookListReducer}),
    provideEffects([BookListEffects]),
    provideStoreDevtools({
      maxAge: 25,
    }),
    BookRestService
  ],
};
