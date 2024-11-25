import { Action } from '@ngrx/store';
import * as fromBookListReducer from './book-list.reducer';
import * as fromBookListActions from './book-list.actions';
import { mockBooks, mockBooksGroupedByDecade } from '../../shared/testing/mocks/book.mock.model';

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
        it('should update books with payload from action and correct mapping', () => {
            const expected: fromBookListReducer.BookListState = {
                ...fromBookListReducer.initialState,
                booksGrouped: mockBooksGroupedByDecade
            }

            const action = fromBookListActions.booksLoaded({books: mockBooks});

            const actual = nextStateForAction(action);

            expect(actual).toEqual(expected);
        });
    });
});