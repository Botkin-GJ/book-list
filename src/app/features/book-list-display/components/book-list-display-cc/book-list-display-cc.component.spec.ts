import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListDisplayCcComponent } from './book-list-display-cc.component';
import * as fromBookListActions from '../../../../store/book-list/book-list.actions';
import { BookListDisplayPcComponent } from '../book-list-display-pc/book-list-display-pc.component';
import { provideBookListMockStore } from '../../../../shared/testing/mocks/book-list-store.mock.model';
import { MockStore } from '@ngrx/store/testing';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BookListDisplayCcComponent', () => {
  let component: BookListDisplayCcComponent;
  let fixture: ComponentFixture<BookListDisplayCcComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BookListDisplayCcComponent,
        BookListDisplayPcComponent,
        AsyncPipe,
        TranslateModule.forRoot(),
        BrowserAnimationsModule
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
