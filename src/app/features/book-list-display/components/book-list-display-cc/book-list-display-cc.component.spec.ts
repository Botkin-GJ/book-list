import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListDisplayCcComponent } from './book-list-display-cc.component';
import * as fromBookListActions from '../../../../store/book-list/book-list.actions';
import { BookListDisplayPcComponent } from '../book-list-display-pc/book-list-display-pc.component';
import { provideBookListMockStore } from '../../../../shared/testing/mocks/book-list-store.mock.model';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot } from 'jasmine-marbles';

describe('BookListDisplayCcComponent', () => {
  let component: BookListDisplayCcComponent;
  let fixture: ComponentFixture<BookListDisplayCcComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BookListDisplayCcComponent,
        BookListDisplayPcComponent
      ],
      providers: [
        provideBookListMockStore,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListDisplayCcComponent);
    component = fixture.componentInstance;

    TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('triggerBooksRequest', () => {
    // Tests for this function will break through TS Data modifiers, so that we can test private functions explicitly.
    it(`should dispatch ${fromBookListActions.booksRequested.type} action`, () => {
      const spy = spyOn(component.store, 'dispatch').and.callThrough();
      const expected = fromBookListActions.booksRequested();

      (component as any).triggerBooksRequest();

      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
});