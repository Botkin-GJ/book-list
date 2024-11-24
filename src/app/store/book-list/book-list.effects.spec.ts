import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { BookListEffects } from './book-list.effects';
import { hot } from 'jasmine-marbles';

// TODO: Enable tests
// describe('BookListEffects', () => {
//     let actions$ = new Observable<Action>;
//     let effects: BookListEffects;
//     let store: MockStore<{}>;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             providers: [
//                 provideMockActions(() => actions$)
//             ]
//         });

//         effects = TestBed.inject(BookListEffects)
//     });

//     function dispatchAction(action: Action<string>) {
//         actions$ = hot('a', {a: action});
//     }
// });