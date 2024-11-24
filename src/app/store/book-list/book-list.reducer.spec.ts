import { Action } from '@ngrx/store';
import * as fromBookListReducer from './book-list.reducer';

describe('bookListReducer', () => {
    function nextStateForAction(action: Action<string>, state: fromBookListReducer.BookListState = fromBookListReducer.initialState) {
        return fromBookListReducer.bookListReducer(state, action);
    }

    describe('initialState', () => {
        it('should return initial state', () => {
            const expected: fromBookListReducer.BookListState ={
            }

            const actual = fromBookListReducer.initialState;

            expect(actual).toEqual(expected);
        });
    });
});