import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { BookRestService } from '../../services/book-rest.service';
import { Book } from '../../shared/models/book.model';
import * as fromBookListActions from './book-list.actions';

@Injectable()
export class BookListEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBookListActions.booksRequested),
      switchMap(() =>
        this.bookListRest.getBooks().pipe(
          switchMap((books: Book[]) => {
            return of(fromBookListActions.booksLoaded({books}));
          }),
          catchError(() => of(fromBookListActions.booksLoadingFailed()))
        )
      )
    )
  );

  addBook$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromBookListActions.bookAdditionRequested),
      switchMap((action) =>
        this.bookListRest.addBook(action.book).pipe(
          switchMap((addedBook: Book) => {
            if(action.onSuccessFn) {
              action.onSuccessFn();
            };
            return of(fromBookListActions.bookAdded({book: addedBook}))
          }),
          catchError(() => of(fromBookListActions.bookAdditionFailed()))
        ),
      ),
    ),
  );

  constructor(
    readonly actions$: Actions,
    readonly bookListRest: BookRestService
  ) {  }
}
