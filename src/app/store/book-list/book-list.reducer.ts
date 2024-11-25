import { createReducer, on } from '@ngrx/store';
import * as fromBookListActions from './book-list.actions';
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
  on(fromBookListActions.booksLoaded, (state, { books }) => ({
    ...state,
    booksGrouped: booksGroupedByDecade(sortBooksByPublishYearDescThenAuthorAsc(books)),
  })),
  on(fromBookListActions.bookAdded, (state, { book }) => ({
    ...state,
    booksGrouped: insertBookIntoBooksGrouped(book, state.booksGrouped)
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

function insertBookIntoBooksGrouped(book: Book, booksGrouped: BooksGrouped): BooksGrouped {
  const decade = Math.floor(book.publishYear/10)*10;
  const extendedBooksGrouped = structuredClone(booksGrouped);
  extendedBooksGrouped[decade] = sortBooksByPublishYearDescThenAuthorAsc([...extendedBooksGrouped[decade], book]);
  return extendedBooksGrouped;
}
