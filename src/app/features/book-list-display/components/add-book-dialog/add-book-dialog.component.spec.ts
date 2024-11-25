import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookDialogComponent } from './add-book-dialog.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as fromBookListActions from './../../../../store/book-list/book-list.actions';
import { mockBooks } from '../../../../shared/testing/mocks/book.mock.model';
import { Book } from '../../../../shared/models/book.model';
import { provideBookListMockStore } from '../../../../shared/testing/mocks/book-list-store.mock.model';

describe('AddBookDialogComponent', () => {
  let component: AddBookDialogComponent;
  let fixture: ComponentFixture<AddBookDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddBookDialogComponent,
        TranslateModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
      providers: [
        provideBookListMockStore,
        {
          provide: MatDialogRef,
          useValue: { close: () => {} }
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it(`should dispatch ${fromBookListActions.bookAdditionRequested.type} action with correct payload`, () => {
      const mockBook: Book = mockBooks[0];
      const mockCloseFunction = () => {};
      const expectedPayload: {book: Book, onSuccessFn: () => void} = {
        book: {name: mockBook.name, author: mockBook.author, category: mockBook.category, publishYear: mockBook.publishYear},
        onSuccessFn: mockCloseFunction
      }
      const expected = fromBookListActions.bookAdditionRequested({book: expectedPayload.book, onSuccessFn: jasmine.any(Function) as any});
      const spy = spyOn(component.store, 'dispatch').and.callThrough();

      component.addBookForm.controls['name'].setValue(mockBook.name);
      component.addBookForm.controls['author'].setValue(mockBook.author);
      component.addBookForm.controls['category'].setValue(mockBook.category);
      component.addBookForm.controls['publishYear'].setValue(mockBook.publishYear.toString());

      component.onSubmit();

      expect(spy).toHaveBeenCalledWith(expected);
    });

    it(`should call reset on formGroup if any value is nullish`, () => {
      const resetSpy = spyOn(component.addBookForm, 'reset').and.callThrough();
      const dispatchSpy = spyOn(component.store, 'dispatch');

      component.addBookForm.controls['name'].setValue(mockBooks[0].name);
      component.addBookForm.controls['author'].setValue('');
      component.addBookForm.controls['category'].setValue(mockBooks[0].category);
      component.addBookForm.controls['publishYear'].setValue(mockBooks[0].publishYear.toString());

      component.onSubmit();

      expect(resetSpy).toHaveBeenCalled();
      expect(dispatchSpy).not.toHaveBeenCalled();
    });
  });

  describe('onClose', () => {
    it('should call close function on dialogRef', () => {
      const spy = spyOn(component.dialogRef, 'close').and.callThrough();

      component.onClose();

      expect(spy).toHaveBeenCalled();
    });
  });
});
