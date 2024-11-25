import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListDisplayPcComponent } from './book-list-display-pc.component';
import { AddBookDialogComponent } from '../add-book-dialog/add-book-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideBookListMockStore } from '../../../../shared/testing/mocks/book-list-store.mock.model';
import { MatIconModule } from '@angular/material/icon';

describe('BookListDisplayPcComponent', () => {
  let component: BookListDisplayPcComponent;
  let fixture: ComponentFixture<BookListDisplayPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BookListDisplayPcComponent,
        AddBookDialogComponent,
        MatCardModule,
        MatDivider,
        TranslateModule.forRoot(),
        MatButtonModule,
        BrowserAnimationsModule,
        MatIconModule
      ],
      providers: [
        provideBookListMockStore
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookListDisplayPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('openAddBookDialog', () => {
    it('should call MatDialog with correct component', () => {
      const expected = AddBookDialogComponent;
      const spy = spyOn(component.addBookDialog, 'open').and.callThrough();

      component.openAddBookDialog();

      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
});
