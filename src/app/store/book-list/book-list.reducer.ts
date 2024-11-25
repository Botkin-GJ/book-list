import { createReducer, on } from '@ngrx/store';
import * as BookListActions from './book-list.actions';
import { Book, BooksGrouped } from '../../shared/models/book.model';

export const bookList = 'book-list';

export interface BookListState {
  booksGrouped: BooksGrouped
}

export const initialState: BookListState = {
  booksGrouped: {}
};

export const bookListReducer = createReducer(
  initialState,
  on(BookListActions.booksLoaded, (state, { books }) => ({
    ...state,
    booksGrouped: booksGroupedByDecade(sortBooksByPublishYearDescThenAuthorAsc(books)),
  }))
);

function sortBooksByPublishYearDescThenAuthorAsc(books: Book[]): Book[] {
  return structuredClone(books).sort((a, b) =>
    (b.publishYear - a.publishYear || a.author.localeCompare(b.author))
  );
}

function booksGroupedByDecade(books: Book[]): BooksGrouped {
  const booksGroupedByDecade: BooksGrouped = {};

  books.forEach((book) => {
    const insertPos = Math.floor(book.publishYear / 10) * 10;

    !!booksGroupedByDecade[insertPos]
      ? booksGroupedByDecade[insertPos].push(book)
      : (booksGroupedByDecade[insertPos] = [book]);
  });

  return booksGroupedByDecade;
}
