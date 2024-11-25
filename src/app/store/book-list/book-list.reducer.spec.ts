import { Action } from '@ngrx/store';
import * as fromBookListReducer from './book-list.reducer';
import * as fromBookListActions from './book-list.actions';
import { mockBooks, mockBooksGroupedByDecade } from '../../shared/testing/mocks/book.mock.model';
import { Book, BooksGrouped } from '../../shared/models/book.model';

describe('bookListReducer', () => {
    function nextStateForAction(action: Action<string>, state: fromBookListReducer.BookListState = fromBookListReducer.initialState) {
        return fromBookListReducer.bookListReducer(state, action);
    }

    describe('initialState', () => {
        it('should return initial state', () => {
            const expected: fromBookListReducer.BookListState = {
                booksGrouped: {}
            }

            const actual = fromBookListReducer.initialState;

            expect(actual).toEqual(expected);
        });
    });

    describe(`on ${fromBookListActions.booksLoaded.type}`, () => {
        it('should update booksGrouped with payload from action and correct mapping', () => {
            const expected: fromBookListReducer.BookListState = {
                ...fromBookListReducer.initialState,
                booksGrouped: mockBooksGroupedByDecade
            }

            const action = fromBookListActions.booksLoaded({books: mockBooks});

            const actual = nextStateForAction(action);

            expect(actual).toEqual(expected);
        });
    });

    describe(`on ${fromBookListActions.bookAdded.type}`, () => {
        it('should insert added book into booksGrouped into correct position', () => {
            const mockAddedBook: Book = {"name":"Anton Goremyka","author":"Dmitry Grigorovich","category":"Classic","ratings":[],"publishYear":1847}
            const mockState: fromBookListReducer.BookListState = {
                booksGrouped: mockBooksGroupedByDecade
            }
            
            const expected: fromBookListReducer.BookListState = {
                ...fromBookListReducer.initialState,
                booksGrouped: {
                    ...mockBooksGroupedByDecade,
                    "1840": [
                        {"name":"Jane Eyre","author":"Charlotte Brontë","category":"Classic","ratings":[{"source":"Goodreads","value":4.1},{"source":"Barnes & Noble","value":4.4}],"publishYear":1847},
                        mockAddedBook,
                        {"name":"Wuthering Heights","author":"Emily Brontë","category":"Classic","ratings":[{"source":"Goodreads","value":3.9},{"source":"Amazon","value":4.1}],"publishYear":1847}
                    ],
                }
            };

            const action = fromBookListActions.bookAdded({book: mockAddedBook});

            const actual = nextStateForAction(action, mockState);

            expect(actual).toEqual(expected);
        });
    });
});