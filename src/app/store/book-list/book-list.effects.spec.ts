import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of, throwError } from 'rxjs';
import { BookListEffects } from './book-list.effects';
import { cold, hot } from 'jasmine-marbles';
import * as fromBookListActions from './book-list.actions';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideBookListMockStore } from '../../shared/testing/mocks/book-list-store.mock.model';
import { Book } from '../../shared/models/book.model';
import { mockBooks } from '../../shared/testing/mocks/book.mock.model';

describe('BookListEffects', () => {
    let actions$ = new Observable<Action>();
    let effects: BookListEffects;
    let store: MockStore<{}>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
               BookListEffects,
               provideMockActions(() => actions$),
               provideHttpClient(),
               provideHttpClientTesting(),
               provideBookListMockStore
            ]
        });

        effects = TestBed.inject(BookListEffects);
        store = TestBed.inject(MockStore);
    });

    function dispatchAction(action: Action<string>) {
        actions$ = hot('a', {a: action});
    }

    describe('loadBooks$', () => {
        it(`should return ${fromBookListActions.booksLoaded.type} with correct payload`, () => {
            const responseBody: Book[] = mockBooks;
            spyOn(effects.bookListRest, 'getBooks').and.returnValue(of(responseBody));

            const expected = cold('a', {a: fromBookListActions.booksLoaded({books: responseBody})});

            dispatchAction(fromBookListActions.booksRequested());

            expect(effects.loadBooks$).toBeObservable(expected);
        });

        it(`should return ${fromBookListActions.booksLoadingFailed.type}`, () => {
            const mockError: HttpErrorResponse = new HttpErrorResponse({error: 'Internal Server Error!', status: 500});
            spyOn(effects.bookListRest, 'getBooks').and.returnValue(throwError(() => mockError));

            const expected = cold('a', {a: fromBookListActions.booksLoadingFailed() });

            dispatchAction(fromBookListActions.booksRequested());

            expect(effects.loadBooks$).toBeObservable(expected);
        });
    });

    describe('addBook$', () => {
        it(`should return ${fromBookListActions.bookAdded.type} with correct payload`, () => {
            const responseBody: Book = mockBooks[0];
            spyOn(effects.bookListRest, 'addBook').and.returnValue(of(responseBody));

            const expected = cold('a', {a: fromBookListActions.bookAdded({book: responseBody})});

            dispatchAction(fromBookListActions.bookAdditionRequested({book: mockBooks[0]}));

            expect(effects.addBook$).toBeObservable(expected);
        });

        it(`should return ${fromBookListActions.booksLoadingFailed.type}`, () => {
            const mockError: HttpErrorResponse = new HttpErrorResponse({error: 'Internal Server Error!', status: 500});
            spyOn(effects.bookListRest, 'addBook').and.returnValue(throwError(() => mockError));

            const expected = cold('a', {a: fromBookListActions.bookAdditionFailed() });

            dispatchAction(fromBookListActions.bookAdditionRequested({book: mockBooks[0]}));

            expect(effects.addBook$).toBeObservable(expected);
        });
    });
});